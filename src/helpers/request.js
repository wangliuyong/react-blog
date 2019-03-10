import axios from 'axios'
import { message} from 'antd';


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com'
axios.defaults.withCredentials = true

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    }
    if(type.toLowerCase() === 'get') {
      option.params = data
    }else {
      option.data = data
    }
    axios(option).then(res => {

      if(res.data.status === 'ok') {
        resolve(res.data)
        message.success('登录成功')
      }else{
        message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      message.error('网络异常')
      reject({ msg: '网络异常' })
    })
  })
}


// request('/auth/login', 'POST', {username: 'hunger', password: '123456'})
//   .then(data=>{
//     console.log(data)
//   }
