Page({
  onTap:function () {
    wx.switchTab({
      url: "../posts/post"
    });
    // wx.navigateTo({
    //   url: '../posts/post'
    // });
  }
})