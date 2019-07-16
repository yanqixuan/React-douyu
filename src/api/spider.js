
const axios = require('axios')
const cheerio = require('cheerio')
axios.defaults.baseURL = ''

// const url = 'https://www.douyu.com/directory/all';
function spider(url,className)  {
  axios.get(url).then(
    res => {
      const $ = cheerio.load(res.data)
      const data = $(`.${className}`).text()
      return data
      // const AsideMenuTitle = $('.Aside-menu-title').text()
      // const items = $('.Aside-menu-item').text()
      // console.log(AsideMenuTitle, items)
      // console.log(res.data)
    }
  )
}

export default spider

// const request = require('request')

// const queryString = require('querystring');
// const iconv = require('iconv-lite');
// const cheerio = require('cheerio');

// http.createServer(function (req, res) {
//   response.writeHead(200, { 'Content-Type': 'text/JSON' })
//   response.end('hello world')
// })
// http.get(url,function(res){
//   console.log(res)
// })
// console.log(request.get(url))

// export default function start() {
//   request({
//     url
//     // headers: {
//     //   'Content-Type': 'application/json;charset=utf-8',
//     //   'Access-Control-Allow-Credentials': true,
//     //   'Access-Control-Allow-Origin': '*',
//     //   "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS"
//     // }
//   }
//     // encoding:'utf8'
//     , function (err, res, body) {
//       // console.log(res)
//       if (!err && res) {
//         console.log(body)
//         return body
//       }
//     })
// }
// start()


// var b = 1;
//   request({
//     url
//   },function(err,res,body){
//     b = body
//     // console.log(b)
//   })

// http.createServer((req,res)=>{

//   // const urlObj = (req.url);
//   // const queryObj = (urlObj.query);
//   // console.log(queryObj);
//   // console.log(urlObj);
//   res.writeHead(200, {
//     'Content-Type': 'application/json;charset=utf-8',
//     'Access-Control-Allow-Credentials': true,
//     'Access-Control-Allow-Origin': '*'
// })
//   res.end(  //res.end只是返回内容

//   );
// })
