//index.js
//获取应用实例
const app = getApp()
var dataSet=[
  [
  {
    id: "",
    name: "红烧肉dsad",
    price: "22"
  },
  {
    id: "",
    name: "宫保鸡丁das",
    price: "22"
  },
  {
    id: "",
    name: "水煮鱼",
    price: "36"
  },
  {
    id: "",
    name: "鱼香肉丝",
    price: "44"
  },
  {
    id: "",
    name: "酸辣土豆丝",
    price: "32"
  },
],
  [
    {
      id: "",
      name: "红烧肉dsadasdasdsa",
      price: "22"
    },
    {
      id: "",
      name: "宫保鸡丁",
      price: "22"
    },
    {
      id: "",
      name: "水煮鱼",
      price: "36"
    },
    {
      id: "",
      name: "鱼香肉丝",
      price: "44"
    },
    {
      id: "",
      name: "酸辣土豆丝",
      price: "32"
    },
  ],
  [
    {
      id: "",
      name: "红烧肉dfsfds",
      price: "22"
    },
    {
      id: "",
      name: "宫保鸡丁",
      price: "22"
    },
    {
      id: "",
      name: "水煮鱼",
      price: "36"
    },
    {
      id: "",
      name: "鱼香肉丝",
      price: "44"
    },
    {
      id: "",
      name: "酸辣土豆丝",
      price: "32"
    },
  ],
  [
    {
      id: "",
      name: "红烧肉",
      price: "22"
    },
    {
      id: "",
      name: "宫保鸡丁gdfgdf",
      price: "22"
    },
    {
      id: "",
      name: "水煮鱼",
      price: "36"
    },
    {
      id: "",
      name: "鱼香肉丝",
      price: "44"
    },
    {
      id: "",
      name: "酸辣土豆丝",
      price: "32"
    },
  ]
]
Page({
  data: {
    tabs: [
      {
        id: "",
        name: "热销菜品"
      },
      {
        id: "",
        name: "热菜"
      },
      {
        id: "",
        name: "凉菜"
      },
      {
        id: "",
        name: "荤菜"
      },
      {
        id: "",
        name: "素菜"
      },
    ],
    items: [
      {
        id: "",
        name: "红烧肉",
        price: "22"
      },
      {
        id: "",
        name: "宫保鸡丁",
        price: "22"
      },
      {
        id: "",
        name: "水煮鱼",
        price: "36"
      },
      {
        id: "",
        name: "鱼香肉丝",
        price: "44"
      },
      {
        id: "",
        name: "酸辣土豆丝",
        price: "32"
      },
    ],
    current: 0
  },
  select: function (event) {
    // console.log(event);
    var index = event.currentTarget.dataset.index
    this.setData({
      "current": index
    })
    this.fetchItems(index)
  },
  fetchItems:function (index) {
    // console.log("21222");
    this.setData({
      items:dataSet[index]
    })
  }
})
