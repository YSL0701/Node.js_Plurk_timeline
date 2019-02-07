var request = require('request')
var cheerio = require('cheerio')

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

function getPlurkPageMainContent(plurk_id) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `https://www.plurk.com/p/${plurk_id.toString(36)}`,
        method: 'GET'
      },
      function(error, response, body) {
        var $ = cheerio.load(body)
        if (error || !$('#permanent-plurk')) {
          reject('文章不存在')
        }
        var content = $('.plurk.cboxAnchor.divplurk.bigplurk .text_holder').html()
        var account = $('.plurk.cboxAnchor.divplurk.bigplurk .user .name')
          .attr('href')
          .split('/')[1]
        var posted = $('.plurk.cboxAnchor.divplurk.bigplurk .time .timeago').attr('datetime')
        var response_count_meta = $('meta[property="og:description"]').attr('content')
        var response_count = response_count_meta.split(' ')[response_count_meta.split(' ').length - 2]
        var displayName = $('.plurk.cboxAnchor.divplurk.bigplurk .user .name').text()
        var avatar = $('.plurk.cboxAnchor.divplurk.bigplurk .avatar img')
          .attr('src')
          .replace('medium', 'big')
          .replace('gif', 'jpg')
        resolve({ plurk: { content, posted, response_count, plurk_id }, account, displayName, avatar })
      }
    )
  })
}

module.exports = { getUid, getTimeline, getDisplayName, getResponse, getPlurkPageMainContent }
