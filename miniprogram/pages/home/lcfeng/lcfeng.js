// page/component/new-pages/cart/cart.js
Page({
  data: {
    carts:[],               // 购物车列表
    hasList:false,          // 列表是否有数据
    totalPrice:0,           // 总价，初始为0
    selectAllStatus:false,    // 全选状态，默认全选
    obj:{
        name:"hello"
    }
  },
  onShow() {
    this.setData({
      hasList: true,
      carts:[
        {id:1,title:'自然火腿土豆丁',image:'/images/ziranhuotui.jpg',num:0,price:0.01,selected:true},
        {id:2,title:'干锅土豆片',image:'/images/ganguotudoupian.jpg',num:0,price:0.03,selected:true},
        {id:3,title:"香菇土豆肉沫拌饭",image:"/images/xianglabanfan.jpg",num:0,price:2,selected:true},
        {id:4,title:"土豆丝",image:"/images/tudousi.jpg",num:0,price:2,selected:true},
        {id:5,title:"紫薯山药糕",image:"/images/zishushanyaogao.jpg",num:0,price:2,selected:true},
        {id:6,title:"紫薯脆片",image:"/images/zishucuipian.jpg",num:0,price:2,selected:true},
        {id:7,title:"小炒竹笋",image:"/images/xiaochaozhusun.jpg",num:0,price:2,selected:true},
        {id:8,title:"脆爽马蹄片",image:"/images/cuishuangmati.jpg",num:0,price:2,selected:true},
        {id:9,title:"煎虾饼",image:"/images/jianxiabin.jpg",num:0,price:2,selected:true}
      ]
    });
    this.getTotalPrice();
  },
  /**
   * 当前商品选中事件
   */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 删除购物车当前商品
   */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index,1);
    this.setData({
      carts: carts
    });
    if(!carts.length){
      this.setData({
        hasList: false
      });
    }else{
      this.getTotalPrice();
    }
  },

  /**
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 绑定加数量事件
   */
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 绑定减数量事件
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carts = this.data.carts;
    let num = carts[index].num;
    if(num <= 1){
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for(let i = 0; i<carts.length; i++) {         // 循环列表得到每个数据
      if(carts[i].selected) {                     // 判断选中才会计算价格
        total += carts[i].num * carts[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  }

})