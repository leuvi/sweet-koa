# 基于koa2和vue的前后端分离架构

* 本地api接口用axios拦截发送/proxy?url=****请求和请求体，
```javascript
axios.interceptors.request.use(config => {
  if (config.data) {
    let configData = JSON.parse(JSON.stringify(config.data));
    config.url += `?url=${configData.url}&time=${Date.now()}`;
  }
  return config
})
```

* 后端/proxy路由用proxyApi方法跨域获取第三方接口
```javascript
router.post('/proxy', async (ctx, next) => {
  const params = ctx.request.body
  const options = {
    url: `${runConf.url}/${params.url.replace(/^\//, '')}`,
    method: params.method,
    headers: params.header,
    data: params.data
  }
  ctx.body = await proxyApi(options)
})
```

httpProxy中间件代理特殊请求，如上传下载等
```javascript
'/file/upload': {
  target: `${runConf.url}`,
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('origin', tool.setOrigin(req));
  }
}
```

开发环境启用koa-logger日志和模块热更新
```javascript
app.use(logger())
app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)
```

生产环境启用log4js日志
```javascript
app.use(log4js)
```


## 开发模式
```bash
npm run start
```

## 项目构建
```bash
npm run build
```

## 生产环境启动
```bash
npm run serve
```

## 项目打包
```bash
npm run zip
```

DEMO地址：[https://cv.sweetui.com](https://cv.sweetui.com/)