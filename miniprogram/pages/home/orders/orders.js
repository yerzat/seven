// page/component/orders/orders.js
Page({
  data:{
    address:{},
    hasAddress: false,
    total:0,
    orders:[
      {id:1,title:'自然火腿土豆丁',image:'/images/ziranhuotui.jpg',num:1,price:0.01,selected:true},
      {id:2,title:'干锅土豆片',image:'/images/ganguotudoupian.jpg',num:1,price:0.03,selected:true},
      {id:3,title:"香菇土豆肉沫拌饭",image:"/images/xianglabanfan.jpg",num:1,price:2,selected:true},
      {id:4,title:"土豆丝",image:"/images/tudousi.jpg",num:1,price:2,selected:true},
      {id:5,title:"紫薯山药糕",image:"/images/zishushanyaogao.jpg",num:1,price:2,selected:true},
      {id:6,title:"紫薯脆片",image:"/images/zishucuipian.jpg",num:1,price:2,selected:true},
      {id:7,title:"小炒竹笋",image:"/images/xiaochaozhusun.jpg",num:1,price:2,selected:true},
      {id:8,title:"脆爽马蹄片",image:"/images/cuishuangmati.jpg",num:1,price:2,selected:true},
      {id:9,title:"煎虾饼",image:"/images/jianxiabin.jpg",num:1,price:2,selected:true}
      ]
  },

  onReady() {
    this.getTotalPrice();
  },
  
  onShow:function(){
    const self = this;
    wx.getStorage({
      key:'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text:'center',
      complete() {
        wx.switchTab({
          url: '/pages/my/my'
        })
      }
    })
  }
})