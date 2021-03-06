// miniprogram/pages/calculator.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    interestRate: 3,
    year: 4,
    amount: 10000
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

  },

  onInputInterestRate: function (e) {
    this.setData({
      interestRate: parseInt(e.detail.value, 10)
    })
  },

  onInputAmount: function (e) {
    this.setData({
      amount: parseInt(e.detail.value, 10)
    })
  },

  onInputYear: function (e) {
    this.setData({
      year: parseInt(e.detail.value, 10)
    })
  },

  calculate: function (e) {
    wx.cloud.callFunction({
      name: 'calcInterest',
      data: this.data,
      success: res => {
        console.log('[云函数] [calcInterest]: ', res.result)
        this.setData(res.result)
      },
      fail: err => {
        console.error('[云函数] [calcInterest] 调用失败', err)
      }
    })
  }
})
