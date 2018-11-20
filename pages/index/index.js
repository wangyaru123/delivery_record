//index.js
var app = getApp()
Page({
  data: {
    hiddenmodalput: true,
    topNum: 0
  },
  onLoad:function(){
    wx.showShareMenu();
    var expressList = wx.getStorageSync('expressList') || [],
        accountList= wx.getStorageSync('accountList') || [],
        addressList = wx.getStorageSync('addressList') || [],
        presonList = wx.getStorageSync('presonList') || [],
        sourceArray= app.globalData.sourceArray,
        typeArray=app.globalData.typeArray;
    for (let i = 0; i < expressList.length; i++) {
      expressList[i].id =  i+1;
      expressList[i].source = sourceArray[expressList[i].sourceIndex];
      expressList[i].type = typeArray[expressList[i].typeIndex];
      expressList[i].address = addressList[expressList[i].addressIndex];
      expressList[i].preson = presonList[expressList[i].presonIndex];
      expressList[i].account = accountList[expressList[i].accountIndex];
    }
    this.setData({
      expressList: expressList
    })
    wx.setStorageSync('expressList', expressList)
  },
  onShow:function(){
    this.onLoad();
  },
  clickAdd:function(){
    wx.navigateTo({
      url: '/pages/add/index'
    });
  },
  edit:function(e){
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/add/index?id='+ id
    });
  },
  delete:function(e){
    var id = e.currentTarget.id;
    this.data.expressList.splice(id-1, 1);
    wx.setStorageSync('expressList', this.data.expressList);
    this.onLoad();
  },
  // 获取滚动条当前位置
  scrolltoupper: function (e) {
    if (e.detail.scrollTop > 50) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  returnTop: function () {
    this.setData({
      topNum: this.data.topNum = 0
    });
  },
  onShareAppMessage: (res) => {
    return {
      title: '快递助手',
      path: '/pages/index/index',
      success: (res) => {
        console.log("转发成功", res);
      },
      fail: (res) => {
        console.log("转发失败", res);
      }
    }
  }
})
