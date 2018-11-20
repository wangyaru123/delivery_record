// pages/account/index.js
var app = getApp()
Page({
  data: {
    isInputShow:false,
    isDeleteShow:1000,
    addvalue:'',
    f: 'account'
  },
  // 点击添加按钮
  clickAdd:function(){
    this.setData({
      isInputShow: true
    })
  },
  // 添加输入框失去焦点时，将添加到accountList中
  addAccountList:function(e){
    var self=this,val=e.detail.value;
    if(val!=""){
      if(self.data.f=='account'){
        self.data.accountList.push(val);
        this.setData({
          accountList: self.data.accountList
        })
        wx.setStorageSync('accountList', self.data.accountList)
      } else if (self.data.f == 'address'){
        self.data.addressList.push(val);
        this.setData({
          addressList: self.data.addressList
        })
        wx.setStorageSync('addressList', self.data.addressList)
      } else if (self.data.f == 'preson') {
        self.data.presonList.push(val);
        this.setData({
          presonList: self.data.presonList
        })
        wx.setStorageSync('presonList', self.data.presonList)
      }
      this.setData({
        addvalue: ''
      })
    }
    /////////////////////////////////////////////////////////////////////待办：查重
    this.setData({
      isInputShow: false
    })
  },
// 长按某一账号，显示删除浮层
  delete:function(e){
    var self = this, index = e.currentTarget.dataset.index;
    this.setData({
      isDeleteShow:index
    })
  },
  // 点击删除，进行删除
  toDelete:function(e){
    var self = this, index = e.currentTarget.dataset.index;
    this.setData({
      isDeleteShow: index
    })
    if (self.data.f == 'account') {
      self.data.accountList.splice(index, 1);
      this.setData({
        accountList: self.data.accountList
      })
      wx.setStorageSync('accountList', self.data.accountList)
    } else if (self.data.f == 'address') {
      self.data.addressList.splice(index, 1);
      this.setData({
        addressList: self.data.addressList
      })
      wx.setStorageSync('addressList', self.data.addressList)
    } else if (self.data.f == 'preson') {
      self.data.presonList.splice(index, 1);
      this.setData({
        presonList: self.data.presonList
      })
      wx.setStorageSync('presonList', self.data.presonList)
    }  
  },
  // 失去焦点时，删除浮层除去
  clear:function(){
    this.setData({
      isDeleteShow: 1000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.f = options.f;
    if (this.data.f=='account'){
      this.setData({
        accountList: wx.getStorageSync('accountList') || []
      })
    } else if (this.data.f == 'address') {
      this.setData({
        addressList: wx.getStorageSync('addressList') || []
      })
    } else if (this.data.f == 'preson') {
      this.setData({
        presonList: wx.getStorageSync('presonList') || []
      })
    } 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})