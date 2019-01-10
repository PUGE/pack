#!/usr/bin/env node

'use strict'

const fs = require('fs')
// 文件变动检测
const chokidar = require('chokidar')
// css压缩
const minifier = require('sqwish')
// js压缩
const UglifyJS = require("uglify-js")

const heardHandle = require('./lib/heard')
const bodyHandle = require('./lib/page')

const path = process.cwd()

// 读取配置文件
const config = JSON.parse(fs.readFileSync(`${path}/ozzx.json`, 'utf8'))

const outPutPath = `${path}/${config.outFolder}/`
const corePath = `${__dirname}/core/`

function pack() {
  // 读取入口模板文件(一次性读取到内存中)
  let templet = fs.readFileSync(`${path}/index.html`, 'utf8')
  // 使用heard处理文件
  templet = heardHandle(`${path}/${config.headFolder}/`, templet)

  const dom = bodyHandle(templet, config)

  // 读取出核心代码
  const configData = `
    window.ozzx = {
      script: {}
    };
    var globalConfig = ${JSON.stringify(config)};
  `
  const coreData = configData + fs.readFileSync(`${corePath}main.js`, 'utf8')


  // console.log(templet)
  // 输出文件
  fs.writeFileSync(`${outPutPath}index.html`, dom.html)

  // 读取出全局样式
  const coreStyle = fs.readFileSync(`${path}/main.css`, 'utf8') + '\r\n'

  // 判断是否需要压缩css
  let outPutCss = coreStyle + dom.style
  if (config.minifyCss) {
    outPutCss = minifier.minify(outPutCss)
  }

  // 判断是否需要压缩js
  let outPutJs = coreData + dom.script
  if (config.minifyJs) {
    outPutJs = UglifyJS.minify(outPutJs).code
  }
  fs.writeFileSync(`${outPutPath}main.css`, outPutCss)
  fs.writeFileSync(`${outPutPath}main.js`, outPutJs)
  console.log('Package success!')
}

// 开始打包
pack()

// 判断是否开启文件变动自动重新打包
if (config) {
  // 文件变动检测
  console.log('./' + config.outFolder + '/*')
  const watcher = chokidar.watch(path, {
    ignored: './' + config.outFolder + '/*',
    persistent: true,
    usePolling: true
  })

  watcher.on('change', path => {
    console.log(`file change: ${path}`)
    // 重新打包
    pack()
  })
}

