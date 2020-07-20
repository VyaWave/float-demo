import {
  Toast
} from 'vant';

// 初始化企业微信SDK
export const initializeWeixin = (callback) => {
  window.__WEIXIN_READY__ = true
  if (typeof wx !== 'undefined' && wx.ready) {
    wx.ready(() => {
      // 微信SDK状态
      window.__WEIXIN_READY__ = true
      // 获取网络状态
      wx.getNetworkType({
        success: function (res) {
          var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
          console.log(networkType)
        }
      });
    })
  } else {
    console.log('失败')
  }
}

// 调用企业微信扫码功能
export const scanQRCode = () => {
  return new Promise((resolve, reject) => {
    if (window.__WEIXIN_READY__) {
      wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          resolve(res.resultStr)
        },
        error: function (res) {
          if (res.errMsg.indexOf('function_not_exist') > 0) {
            alert('版本过低请升级')
          }
        }
      })
    }
  })
}

// 调用企业微信分享朋友圈功能
export const shareFriends = (imgUrl) => {
  return new Promise((resolve, reject) => {
    wx.onMenuShareTimeline({
      title: '测试分享', // 分享标题
      link: 'https://qawxhkcrm.qdingnet.com/qdp-qiyeweixin-webui/#/traffic/', // 分享链接
      imgUrl: imgUrl,
      success: function (res) {
        Toast('已分享');
        resolve(res)
      },
      cancel: function (res) {
        Toast('已取消');
        resolve(res)
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
  })
}

// 调用企业微信分享到微信功能
export const shareWeChart = (imgUrl) => {
  return new Promise((resolve, reject) => {
    wx.invoke('shareWechatMessage', {
        title: '测试分享', // 分享标题
        link: 'https://qawxhkcrm.qdingnet.com/qdp-qiyeweixin-webui/#/traffic/', // 分享链接
        imgUrl: imgUrl
      },
      function (res) {
        if (res.err_msg == "shareWechatMessage:ok") {
          Toast('已分享');
          resolve(res)
        }
        if (res.err_msg == "shareWechatMessage:cancel") {
          Toast('已取消');
          resolve(res)
        }

      });

  })
}
