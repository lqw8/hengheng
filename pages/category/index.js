// pages/category/index.js
import { request } from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[],
    rightContent: [],
      // 被点击的左侧的菜单
    currentIndex: 0,
       // 右侧内容的滚动条距离顶部的距离
    scrollTop: 0

  },
   // 接口的返回数据
   Cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates();
  },
    //获取分类
    getCates(){
      request({url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"})
      .then(result=>{
        this.Cates = result.data.message;
        let leftMenuList = this.Cates.map(v=>v.cat_name);
        let rightContent = this.Cates[0].children;
          this.setData({
            leftMenuList,
            rightContent
          })
      })
    },

    handleItemTap(e){
       /* 
    1 获取被点击的标题身上的索引
    2 给data中的currentIndex赋值就可以了
    3 根据不同的索引来渲染右侧的商品内容
     */
    const { index } = e.currentTarget.dataset;

    let rightContent = this.Cates[index].children;
    this.setData({
      currentIndex: index,
      rightContent,
      // 重新设置 右侧内容的scroll-view标签的距离顶部的距离
      scrollTop: 0
    })
    },

})