var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var port = process.env.PORT || 3000
var { getUid, getTimeline, getDisplayName, getResponse, getPlurkPageMainContent } = require('./main_function')
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
app.post('/plurkPage', (req, res) => {
  Promise.all(req.body.plurk_id_list.map(item => getPlurkPageMainContent(item.plurk_id))).then(data => {
    res.json(data)
  })
})
app.listen(port, function() {
  console.log('sever啟動')
})
