// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    liveRoomList:[
      {
        title:"易展翅525人才节",
        src:"/static/521rcj.png",
        time:"05-25 10:00",
        count:"10.10万"
      },
      {
        title:"2023春招冲刺·运营行业急招",
        src:"/static/2023czcc.png",
        time:"04-12 19:00",
        count:"3368"
      },
      {
        title:"2023春招冲刺·热门高薪职位",
        src:"/static/2023czccHOT.jpeg",
        time:"04-12 19:00",
        count:"3368"
      },
      {
        title:"2023春招冲刺·500强行业龙头专场",
        src:"/static/2023czccTOP500.jpeg",
        time:"04-24 17:00",
        count:"3991"
      },
      {
        title:"秒懂求职-冲刺金三银四",
        src:"/static/mdqz.png",
        time:"04-06 15:00",
        count:"4229"
      },
      {
        title:`"秦青展翅"[阎良区空天产业人才发展合作论坛]直播`,
        src:"/static/zhktzxrc.jpeg",
        time:"03-10 09:30",
        count:"4.52万"
      },
      {
        title:`2023春招进行时-有问必答`,
        src:"/static/2023Spring.png",
        time:"03-03 17:30",
        count:"4765"
      },
      {
        title:`2023春招进行时-热门岗位急招`,
        src:"/static/2023Springing.jpeg",
        time:"03-06 17:30",
        count:"7187"
      },
    ],
    tabs:{
      activeId:0,
      tab:[
        {
          title:"推荐",
          id:0
        },
        {
          title:"最新",
          id:1
        }
      ]
    }
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
  }
})