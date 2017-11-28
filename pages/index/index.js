//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items:[
      {
        id:"",
        name:"食堂",
      },
      {
        id:"",
        name:"外卖",
      },
      {
        id:"",
        name:"外带",
      },
      {
        id:"",
        name:"订单",
      },
      {
        id:"",
        name:"账单",
      },
      {
        id:"",
        name:"报表",
      }
    ],
    imgUrls: [
      '../../images/tooopen_sy_143912755726.jpg',
      '../../images/tooopen_sy_175833047715.jpg',
      '../../images/tooopen_sy_175866434296.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 2000,
    duration: 1000
  },
})
