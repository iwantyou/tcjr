//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
   var token =  wx.getStorageSync('token')
    // 登录
    if(!token){
      wx.login({
        success: res => {
          let code = res.code
          var that = this
          wx.request({
            url: that.globalData.apihost + 'code',
            method: 'post',
            data: {
              code
            },
            dataType: 'json',
            success(res) {
              console.log(res.data)
              wx.setStorageSync('token', res.data.data.session_3rd)
            },
            fail(err) {
              console.log(err)
            }
          })
        }
      })
    }
    //检查登录态
    wx.checkSession({
      success(){
        console.log('没有失效')
        console.log(token, 11111111)
      },
      fail(){
        var that = this
        wx.login({
          success: res => {
            let code = res.code
            wx.request({
              url: 'http://127.0.0.1:9566/v1/' + 'code',
              method: 'post',
              data: {
                code
              },
              dataType: 'json',
              success(res) {
                console.log(res.data)
                wx.setStorageSync('token', res.data.data.session_3rd)
              },
              fail(err) {
                console.log(err)
              }
            })
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    apihost:'http://127.0.0.1:9566/v1/'
  }
})