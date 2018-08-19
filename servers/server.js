let express = require('express')

let app = express()
app.listen(3000)
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  if (req.method === 'OPTIONS') res.send(200)/* 让options请求快速返回 */
  else next()
})


//活动接口
let news = require('./mock/news');
app.get('/header', function (req, res) {
  res.json(news)
})

//游戏排行榜接口
let hotlist = require('./mock/hotlist');
app.get('/hotlist', function (req, res) {
  res.json(hotlist)
})

//热门游戏接口
let hotgame = require('./mock/hotgame');
app.get('/hotgame', function (req, res) {
  res.json(hotgame)
})
