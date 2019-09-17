const fs = require('fs')
const path = require('path')
const package = require('./package.json')
const moment = require('moment')
//引入archiver
const archiver = require('archiver')
//打包成zip
const zip = archiver.create('zip', {
  zlib: {
    level: 9
  }
})

//需要打包的文件和目录
const zipFile = [
  'config/',
  'server/',
  'src/',
  'favicon.ico',
  'package-lock.json',
  'package.json',
]

//打包名称
const zipName = path.join(__dirname, `${package.name}_v${package.version}_${moment().format('YYYYMMDDHHmmss')}.zip`)
//创建流文件
const zipPath = fs.createWriteStream(zipName)
//写入流
zip.pipe(zipPath)
zipFile.forEach(file => {
  if (/\//g.test(file)) {
    zip.directory(file, file)
  } else {
    zip.file(file, {
      name: file
    })
  }
})

//结束
zip.finalize()

//结束事件
zip.on('end', function () {
  console.log('\x1b[33m%s\x1b[0m', `打包完成 => ${zipName}`)
})

//监听异常事件
zip.on('error', function (error) {
  throw error
})