// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[
      {
        title:"求职意向",
        icon:"/static/qzyx.png",
        url:"/subPages/idea/index"
      },
      {
        title:"我的协议",
        icon:"/static/wdxy.png",
        url:""
      },
      {
        title:"实习评价",
        icon:"/static/sxpj.png",
        url:""
      },
      {
        title:"问题反馈",
        icon:"/static/wtfk.png",
        url:""
      },
      {
        title:"设置",
        icon:"/static/setting.png",
        url:"/subPages/setting/index"
      },
    ]
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
  handleClickMenuItem({currentTarget}){
    const {item} = currentTarget.dataset
    if(item.url){
      wx.navigateTo({
        url: item.url,
        fail(){
          console.log("跳转失败");
        }
      })
    }
  }
})