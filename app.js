var express = require('express')
var app = express()
var cors = require('cors')
var request = require('request')
var cheerio = require('cheerio')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var port = process.env.PORT || 3000

app.use(express.static('static'))
// app.use(express.static('dist'))
app.use(jsonParser)
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:8080'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
}
app.use(cors(corsOptions))

app.post('/getTimeline', (req, res) => {
  console.log(req.body)
  getUid(req.body.account)
    .then(user_id => {
      return getTimeline(user_id, req.body.offset)
    })
    .then(data => {
      getDisplayName(req.body.account).then(displayName => {
        data.displayName = displayName
        data.account = req.body.account
        res.json(data)
      })
    })
    .catch(err => {
      console.log(err)
      res.json({ success: 'error', message: err })
    })
})
app.post('/reply', (req, res) => {
  getReply(req.body.plurk_id)
    .then(replyData => {
      res.json({ reply: replyData, success: 'success' })
    })
    .catch(err => {
      console.log(err)
      res.json({ success: 'error', message: err })
    })
})

app.listen(port, function() {
  console.log('sever啟動')
})

function getUid(account) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `https://www.plurk.com/${account}`,
        method: 'GET'
      },
      function(error, response, body) {
        var $ = cheerio.load(body)
        if (error || $('title').text() == 'User Not Found! - Plurk' || $('title').text() == 'Your life, on the line - Plurk') {
          return reject('帳號不存在!')
        }
        var user_id = $('.show_all_friends > a')
          .attr('href')
          .split('=')[1]
          .split('&')[0]
        resolve(user_id)
      }
    )
  })
}

function getTimeline(user_id, offset) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: 'https://www.plurk.com/TimeLine/getPlurks',
        method: 'POST',
        formData: { only_user: 1, user_id: user_id, offset: offset }
      },
      function(error, response, body) {
        if (error || !body) {
          return reject('發生錯誤')
        }
        var responseData = JSON.parse(body)
        responseData.success = 'success'
        resolve(responseData)
      }
    )
  })
}

function getDisplayName(account) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `https://www.plurk.com/${account}`,
        method: 'GET'
      },
      function(error, response, body) {
        var $ = cheerio.load(body)
        if (error || $('title').text() == 'User Not Found! - Plurk' || $('title').text() == 'Your life, on the line - Plurk') {
          return reject('帳號不存在!!')
        }
        var displayName = $('.display_name').text()
        resolve(displayName)
      }
    )
  })
}

function getReply(plurk_id) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: 'https://www.plurk.com/Responses/get2',
        method: 'POST',
        formData: { from_response: 0, plurk_id }
      },
      function(error, response, body) {
        if (error) {
          return reject('發生錯誤')
        }
        var data = JSON.parse(body)
        var replyUser = data.friends
        var replyData = data.responses.map(reply => {
          var uid = reply.user_id
          reply.account = replyUser[uid].nick_name
          reply.displayName = replyUser[uid].display_name
          reply.nameColor = replyUser[uid].name_color
          return reply
        })
        resolve(replyData)
      }
    )
  })
}
