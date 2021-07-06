// index.js
// 获取应用实例
import { request } from "../../request/index.js"
Page({
  data: {
    swiperList:[],
    cateList:[],
    floorList:[]
  },
  
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success:(res)=> {
    //     this.setData({
    //       swiperList:res.data.message
    //     })
    //   }
    // })
    this.getSwiperList();
    this.getCateList();
    this.getfloorList()
    
  },
  //获取轮播图
  getSwiperList(){
    request({url:"/home/swiperdata"})
    .then(result=>{
        this.setData({
          swiperList:result
        })
    })
  },
   //获取导航
   getCateList(){
    request({url:"/home/catitems"})
    .then(result=>{
        this.setData({
          cateList:result
        })
    })
  },
     //获取楼层
     getfloorList(){
      request({url:"/home/floordata"})
      .then(result=>{
          this.setData({
            floorList:result
          })
      })
    }
})
