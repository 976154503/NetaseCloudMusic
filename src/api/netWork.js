import Axios from 'axios'

// 全局配置
Axios.default.url = '/api'
Axios.default.timeout = 5000
// 封装请求方法
export default {
  get: function (path = '', params = {}) {
    /*
    * 通过封装的函数会return Promise对象，通过Promise对象中的.then 方法拿到返回结果
    * resolve成功的结果，reject失败的结果
    * 详情见ES6 Promise
    * */
    return new Promise(function (resolve, reject) {
      Axios.get(path, {
        params: params
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  post: function (path = '', params = {}) {
    return new Promise(function (resolve, reject) {
      Axios.post(path, params)
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
