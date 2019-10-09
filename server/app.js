const path = require('path')
const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const static = require('koa-static')
const logger = require('koa-logger')
const app = new koa()
const router = require('./router')
const {
  webpackDevMiddleware,
  webpackHotMiddleware
} = require('./middleware/hot')
//http代理
const httpProxy = require('./middleware/httpProxy')
const {
  proxyTable
} = require('./tool')
const log4js = require('./middleware/log4js')


Object.keys(proxyTable).forEach((context) => {
  app.use(httpProxy(context, proxyTable[context]))
})

app.use(bodyParser())

//开发环境
if (process.env.node_env == 'dev') {
  //开发环境启用logger日志
  app.use(logger())
  //添加HRM中间件
  app.use(webpackDevMiddleware)
  app.use(webpackHotMiddleware)
}

//生产环境
if (process.env.node_env == 'prod') {
  //生产环境启用log4js日志
  app.use(log4js)
  app.use(views(path.join(process.cwd(), '/dist')))
  app.use(static(path.join(process.cwd(), '/dist/static')))
}

app.use(router.routes())
app.use(router.allowedMethods())


const IP = require('ip')
const package = require('../package.json')
const PORT = process.env.port || package.port

app.listen(PORT, () => {
  console.log('\x1b[35m%s\x1b[0m', `${package.description}`)
  console.log('\x1b[35m%s\x1b[0m', `项目已启动 => http://${IP.address()}:${PORT}`)
  console.log('\x1b[35m%s\x1b[0m', `当前环境   => ${require('./runConf').envName}`)
})