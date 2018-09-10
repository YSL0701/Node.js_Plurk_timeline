var express = require('express')
var app = express()
var request = require('request')
var cheerio = require("cheerio")
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use(express.static('page'));


app.post('/getTimeline', jsonParser, (req, res) => {
  console.log(req.body)
  getUid(req.body.account).then((user_id) => {
    return getTimeline(user_id)
  }).then((data) => {
    res.json(data)
  })
})

app.listen(3000, function () {
  console.log("sever啟動");
})


function getUid(account) {
  return new Promise((resolve, reject) => {
    request({
      url: `https://www.plurk.com/${account}`,
      method: 'GET'
    }, function(error, response, body) {
      if(error || !body) {
        reject();
      }
      var $ = cheerio.load(body)
      var user_id = $('.show_all_friends > a').attr('href').split('?')[1].split('&')[0].split('=')[1]
      resolve(user_id)
    })
  })
}

function getTimeline(user_id) {
  return new Promise((resolve) => {
    request({
      url: 'https://www.plurk.com/TimeLine/getPlurks',
      method: 'POST',
      formData: { only_user: 1, user_id: user_id }
    }, function (error, response, body) {
      if (error || !body) { return; }
      // console.log(JSON.parse(b))
      resolve(JSON.parse(body))
    })
  })
}