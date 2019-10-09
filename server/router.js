const Router = require('koa-router')
const router = new Router()
const {
  sleep,
  proxyApi,
} = require('./tool')
const runConf = require('../server/runConf')

router.post('/proxy', async (ctx, next) => {
  const params = ctx.request.body
  const options = {
    //url: 'https://cnodejs.org/api/v1/topics',
    url: `${runConf.url}/${params.url.replace(/^\//, '')}`,
    method: params.method,
    headers: params.header,
    data: params.data
  }
  ctx.body = await proxyApi(options)
})

//加载基础信息
router.post('/baseConfig', async (ctx, next) => {
  
})
//更新基础信息
router.post('/updateBaseConfig', async (ctx, next) => {
  
})
//清除基础信息
router.post('/clearBaseConfig', async (ctx, next) => {
  
})

//首页列表
router.get('/api/list', async (ctx, next) => {
  ctx.type = 'json'
  //await sleep(500)
  ctx.body = {
    code: '10000',
    message: '请求成功',
    data: require('./mock/list')
  }
})

//技能树
router.get('/api/skill', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    code: '10000',
    message: '请求成功',
    data: require('./mock/skill')
  }
})

//工作经历
router.get('/api/work', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    code: '10000',
    message: '请求成功',
    data: require('./mock/work')
  }
})

//项目经历
router.get('/api/project', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    code: '10000',
    message: '请求成功',
    data: require('./mock/project')
  }
})

//教育经历
router.get('/api/education', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    code: '10000',
    message: '请求成功',
    data: require('./mock/education')
  }
})

//渲染模板
router.get('/*', async (ctx, next) => {
  try {
    await ctx.render('index')
  } catch (e) {
    console.log(e)
    ctx.type = 'json'
    ctx.body = {
      code: '20000',
      message: '服务器错误'
    }
  }
})

module.exports = router