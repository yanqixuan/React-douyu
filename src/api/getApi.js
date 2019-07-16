const axios = require('axios')
axios.defaults.baseURL = ''

export default function getApi(api,callBack){
  axios.get(api).then(res => {
    // console.log(res)
    callBack(res)
    // return res
  })
}

