var express = require('express')
var app = express()
var request = require('request')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use(express.static('page'));


app.post('/getTimeline',jsonParser,(req,res) => {
  console.log(req.body)
  getTimeline().then((data) => {
    res.json(data)
  })
})

app.listen(3000,function(){
  console.log("sever啟動");
})

function getTimeline() {
  return new Promise((resolve) => {
    request({
      url: 'https://www.plurk.com/TimeLine/getPlurks',
      method: 'POST',
      formData: { only_user: 1, user_id: 4686724 }
    }, function (error, r, body) {
      if (error || !body) { return; }
      // console.log(JSON.parse(b))
      resolve(JSON.parse(body))
    })
  })
}