var express = require('express')
var app = express()
var cors = require('cors')
var request = require('request')
var cheerio = require('cheerio')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var port = process.env.PORT || 3000

// app.use(express.static('static'))
app.use(express.static('dist'))
app.use(jsonParser)
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:8080'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
}
app.use(cors(corsOptions))

app.post('/getTimeline', (req, res) => {
  console.log(req.body)
  var data = {}
  getUid(req.body.account)
    .then(user_id => {
      return getTimeline(user_id, req.body.offset)
    })
    .then(responseData => {
      data = responseData
      return getDisplayName(req.body.account)
    })
    .then(({ displayName, targetAvatar }) => {
      data.displayName = displayName
      data.account = req.body.account
      data.avatar = targetAvatar
      res.json(data)
    })
    .catch(err => {
      console.log(err)
      res.json({ success: 'error', message: err })
    })
})
app.post('/response', (req, res) => {
  getResponse(req.body.plurk_id)
    .then(responseData => {
      res.json({ response: responseData, success: 'success' })
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
        formData: { only_user: 1, user_id, offset }
      },
      function(error, response, body) {
        if (error || !body) {
          return reject('發生錯誤')
        }
        var responseData = JSON.parse(body)
        if (responseData.error) {
          return reject('該帳號時間軸目前為私密狀態')
        }
        responseData.success = 'success'
        resolve(responseData)
      }
    )
  })
}

//顯示名稱和大頭貼
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
        var targetAvatar = $('#profile_pic').attr('src')
        resolve({ displayName, targetAvatar })
      }
    )
  })
}

function getResponse(plurk_id) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: 'https://www.plurk.com/Responses/get',
        method: 'POST',
        formData: { from_response_id: 0, plurk_id }
      },
      function(error, response, body) {
        if (error) {
          return reject('發生錯誤')
        }
        var data = JSON.parse(body)
        var responseUser = data.users
        var responseData = data.responses.filter(response => {
          var uid = response.user_id
          if (!responseUser[uid]) {
            return false
          }
          response.account = responseUser[uid].nick_name
          response.displayName = responseUser[uid].display_name
          if (responseUser[uid].avatar) {
            response.avatar = `https://avatars.plurk.com/${uid}-medium${responseUser[uid].avatar}.gif`
          } else {
            response.avatar = 'https://www.plurk.com/static/default_medium.gif'
          }
          if (!responseUser[uid].name_color) {
            response.nameColor = '111'
          } else {
            response.nameColor = responseUser[uid].name_color
          }
          return response
        })
        resolve(responseData)
      }
    )
  })
}

// getOwnerContent(plurk_id){
//   return new Promise((resolve,reject)=>{
//     request(
//       {
//         url:`https://www.plurk.com/p/${plurk_id.toString(10)}`,
//         method:'GET'
//       },
//       function(error,response,body){
//         var $ = cheerio.load(body)
//         if( error || !$('.permalink') ){
//           reject('文章不存在')
//         }
//         $('')
//       }
//     )
//   })
// }
