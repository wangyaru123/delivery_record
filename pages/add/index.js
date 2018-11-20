//index.js
var app = getApp()
Page({
  data: {
    hiddenmodalput: true
    //可以通过hidden是否掩藏弹出框的属性，来指定那个弹出框
  },
  onLoad: function (options) {
    this.setData({
      listIndex : options.id||'',
      sourceArray: app.globalData.sourceArray,
      typeArray: app.globalData.typeArray,
      accountList : wx.getStorageSync('accountList') || [],
      addressList : wx.getStorageSync('addressList') || [],
      presonList : wx.getStorageSync('presonList') || []
    })
  },
  onShow:function(){
    if (this.data.listIndex){
      this.initData();
    }
  },
  initData:function(){
    var index = this.data.listIndex,
        expressList = wx.getStorageSync('expressList');
    this.setData({
      theExpressList: expressList[index-1],
      sourceIndex: expressList[index - 1].sourceIndex,
      accountIndex: expressList[index - 1].accountIndex,
      typeIndex: expressList[index - 1].typeIndex,
      addressIndex: expressList[index - 1].addressIndex,
      presonIndex: expressList[index - 1].presonIndex
    })
    console.log(this.data.theExpressList)
  },
  bindPickerSourceChange: function (e) {
    this.setData({
      sourceIndex: e.detail.value
    })
  },
  bindPickerAccountChange: function (e) {
    this.setData({
      accountIndex: e.detail.value
    })
  },
  bindPickerAddressChange: function (e) {
    this.setData({
      addressIndex: e.detail.value
    })
  },
  bindPickerTypeChange: function (e) {
    this.setData({
      typeIndex: e.detail.value
    })
  },
  bindPickerPresonChange: function (e) {
    this.setData({
      presonIndex: e.detail.value
    })
  },
  formSubmit:function(e){
    this.data.expressList = wx.getStorageSync('expressList')||[];
    if (this.data.listIndex) {
      for (let i = 0; i < this.data.expressList.length; i++) {
        if (this.data.expressList[i].id == this.data.listIndex){
          this.data.expressList.splice(this.data.listIndex-1,1);
          this.data.expressList.push(e.detail.value);
       }
      }
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 2000
      })
    }else{
      this.data.expressList.push(e.detail.value);
      wx.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 2000
      })
    }
    wx.setStorageSync('expressList', this.data.expressList);
  }
})
