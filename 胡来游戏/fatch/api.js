import axios from 'axios'
import {stringify} from 'qs'
let mydata = {'TransCode': '020111', 'OpenId': 'Test', 'Body': {'SongListId': '889883842'}}
let params = stringify(mydata, { allowDots: false })
function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data.Body)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}
export default {
  // 获取我的页面的后台数据
  mineBaseMsgApi () {
    return fetch('https://api.hibai.cn/api/index/index', params)
  }
}
