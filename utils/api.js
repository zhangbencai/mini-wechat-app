let baseUrl = ''

// function fetch(url, method, data, callback) {
//   wx.request({
//     url: baseUrl + url,
//     method,
//     data,
//     headers: {
//       Auth....: wx.getStorageSync('token')
//     },
//     success(res) {
//       callback(res.data.data)
//     },
//     fail(err) {
//       wx.showToast({
//         title: ''
//       })
//     }
//   })
// }

function fetch(url, method, data) {
  return new Promise((resolve, reject)=>{
    wx.request({
      url: baseUrl+url,
      method,
      data,
      headers: {
        Authorization: wx.getStorageSync('token')
      },
      success(res) {
        // 表示成功，p.then()
        resolve(res.data.data)
      },
      reject(err) {
        // 表示失败，p.catch()
        reject(err)
      }
    })
  })
}

function getGoodList(data) {
  return fetch('/qf/getList', 'GET', data)
}

// CommonJS语法
module.exports = {
  getGoodList
}


// 在页面组件中，如何使用？
// let api = require('../../utils/api')
//
// api.getGoodList({page:1,size:2}).then(res=>{
//   this.setData({list: res})
// }).catch(err=>{
//   console.log('失败')
// })
