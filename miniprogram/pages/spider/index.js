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
    const getRealInterestRate = function (t) {
      return t / (amount * (year - (year - 1) / 2)) * 100
    }

    const getExpectedInterestList = function () {
      const interestList = []
    
      for (let i = year; i > 0; i--) {
        interestList.push({
          formula: `${amount} * ${i/4}(每年) * ${interestRate} / 100`,
          value: amount * i/4 * interestRate/100,
          year: year - i + 1,
        })
      }
      return interestList
    }

    const {
      interestRate,
      amount,
      year,
    } = this.data
    const totalInterest = interestRate / 100 * amount * year
    const realInterestRate = getRealInterestRate(totalInterest)
    const expectedInterestList = getExpectedInterestList()
    this.setData({
      totalInterest,
      realInterestRate,
      expectedInterestList,
    })
  }
})