// pages/sendProgress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:{
      activeId:0,
      tab:[
        {
          title:"全部",
          id:0
        },
        {
          title:"被查看",
          id:1
        },
        {
          title:"邀面试",
          id:2
        },
        {
          title:"不合格",
          id:3
        },
        {
          title:"录用",
          id:4
        },
      ]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  handleTabChange({currentTarget}){
    const {item} = currentTarget.dataset
    this.setData({"tabs.activeId":item.id})
  },
})