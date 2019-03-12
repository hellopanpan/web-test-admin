import axios from 'axios'
import { Loading } from 'element-ui';
function createFormData(data) {
  let formData = new FormData()
  for (let key in data) {
    formData.append(key, data[key])
  }
  return formData
}

const fetch = options => {
  let opts = Object.assign({
    method: 'POST'
  }, options)
  if (opts.url) {
    let timeStr = `t=${Date.now()}`
    opts.url += /\?/.test(opts.url) ? '&' + timeStr : '?' + timeStr
  }

  if (opts.form) {
    opts.data = createFormData(opts.data)
  }
  console.log('request-start:', opts.url)
  var loadingInstance1 = Loading.service({ fullscreen: true });
  return new Promise((resolve, reject) => {
    axios(opts).then(res => {
      if (res.status === 200) {
        if (res.data.code == 0) {
          console.log('request-success:', opts.url, res.data)
          resolve(res.data.data)
        } else if (res.data.code == 403) {
          // 未登录
          console.log('未登录')
          localStorage.removeItem('token')
          localStorage.removeItem('userId')
          location.href = location.protocol + '//' + location.host + '/#/login'
        } else {
          reject(res.data)
        }
      } else {
        reject(res) 
      }
      setTimeout(() => {
        loadingInstance1.close()
      }, 500)
    }).catch(err => {
      reject(err)
      setTimeout(() => {
        loadingInstance1.close()
      }, 500)
    })
  })
}

export default fetch
