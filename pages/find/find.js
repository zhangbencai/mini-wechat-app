
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'hello 2002',
    list: [
      {id: 1, name: 'aaaa'},
      {id: 2, name: 'bbbb'},
      {id: 3, name: 'cccc'},
      {id: 4, name: 'dddd'},
      {id: 5, name: 'eeee'}
    ],
    idx: 67,
    lang: '2',
    num: 150
  },

  changeMsg() {
    this.setData({
      msg: 'hello 2003'
    })
  },
  infoChange(e) {
    console.log('e', e)
    this.setData({msg: e.detail.value})
  },
  handle1() {
    console.log(1111111111111111)
  },
  handle2() {
    console.log(2222222222222)
  },
  userTap(e) {
    console.log('name', e.currentTarget.dataset.user.name)
    console.log('idx', e.currentTarget.dataset.index)
  },
  changeLang(e) {
    // console.log('e', e.target)
    // console.log(e.currentTarget.dataset.lang)
    this.setData({lang: e.target.dataset.lang})
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
  onShareAppMessage: function () {

  }
})
