// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: ''
  },

  setting() {
    wx.openSetting({
      success (res) {
        console.log(res.authSetting)
      }
    })
  },

  getPhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },

  takePhoto() {
    // 第一步，先判断当前用户有没有同意授权相机
    wx.getSetting({
      success: res => {
        console.log('授权列表', res)
        // 如果已授权相机
        if (res.authSetting['scope.camera']) {
          this.getPhoto()
        } else {
          // 如果未授权相机，手动弹框请求用户授权
          wx.authorize({
            scope: 'scope.camera',
            success () {
              this.takePhoto()
            }
          })
        }
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },

  // 获取用户信息
  getUser(e) {
    console.log('用户信息', e.detail.userInfo.avatarUrl)
    this.setData({
      src: e.detail.userInfo.avatarUrl
    })
    // 把用户信息通过 wx.request() 提交给后端保存起来
  },
  // 获取手机号码
  getPhoto(e) {
    console.log('手机号码', e)
  },

  // 微信支付流程
  // 微信支付的前提条件：小程序必须先备案(交300年费)，在小程序后台点击“开通支付”
  buy() {
    // 第一步，调自己的后端接口
    // wx.request() 把订单信息发送给后端
    // 后端收到订单信息后，生成package及其相关信息，并返回给前端

    // 第二步，开始支付
    wx.requestPayment({
      timeStamp: '',   // 这些字段都来自我们自己的后端服务器
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',    // 加密信息，至少包括下单人的微信openid、总价....
      success (res) {
        // 支付成功
        // 跳转到其它页面，或者弹框提示用户支付成功并刷新页面
      },
      fail (res) {
        // 支付失败
      }
    })
  },

  // 使用动画（一）
  startAnimation1() {
    this.animate('.box', [
      { opacity: 1.0, rotate: 0, backgroundColor: '#FF0000' },
      { opacity: 0.5, rotate: 45, backgroundColor: '#00FF00'},
      { opacity: 0.0, rotate: 90, backgroundColor: '#FF0000' },
    ], 5000, function() {
        this.clearAnimation('.box', { opacity: true, rotate: true }, function () {
          console.log("清除了#container上的opacity和rotate属性")
          // 写业务逻辑
          // 在这里开始第二个动画
        })
    }.bind(this))
  },

  // 使用动画（二）
  startAnimation2() {
    this.animate('.block', [
      { scale: [1, 1], rotate: 0, ease: 'ease-out', backgroundColor: '#ff0000' },
      { scale: [1.5, 1.5], rotate: 45, ease: 'ease-in', offset: 0.9, backgroundColor: '#00ff00' },
      { scale: [2, 2], rotate: 90, backgroundColor: '#0000ff' },
    ], 5000, function () {
      // 清除动画
      this.clearAnimation('.block', { backgroundColor: false, scale: true }, function () {
        console.log("清除了.block上的所有动画属性")
        // 写点业务逻辑
      })
    }.bind(this))
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 这个由 button opentype='share' 来触发
      return {
        title: '活动1',
        path: 'pages/find/find',
        imageUrl: ''
      }
    } else {
      // 这个由 右上角的胶囊按钮中的三个点 来触发
      return {
        title: '这是一个抽奖活动',
        path: 'pages/index/index',
        imageUrl: ''
      }
    }
  }
})
