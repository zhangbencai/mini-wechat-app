//app.js
App({
  // 应用程序的入口文件
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('code', res.code)

        wx.request({
          method: 'POST',
          data: {
            code: res.code
          },
          url: '/qf/login',
          success(res) {
            wx.setStorageSync('token', res.token)
          }
        })
      }
    })


    wx.getSetting({
      success: res => {
        console.log('授权列表', res)

        // 获取地理定位
        if (res.authSetting['scope.userLocation']) {
          console.log('++++++++++')
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // wx.....获取你的经纬度位置
          wx.getLocation({
           type: 'wgs84',
           success (res) {
             console.log('位置', res)
           }
          })
        } else {
          // 如果没有授权，弹框提示用户同意授权
          console.log('-------')
          wx.authorize({
            scope: 'scope.userLocation',
            success () {
              wx.getLocation({
               type: 'wgs84',
               success (res) {
                 console.log('位置', res)
               }
              })
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
