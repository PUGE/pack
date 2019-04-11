ozzx:  一个高效、易用、干净的html框架

### 1. 项目特点

1. 所有dom元素都不是虚拟的，完美兼容传统MVC框架，且对搜索引擎友好。
2. 内置将一个页面分离成多个组件，组件可以方便的移植到其他项目中使用,支持加载远程地址组件。
3. 支持使用less, sass, pug等写法(需要安装对应插件),能够自动将支持性不友好的js、css代码转换为兼容各个浏览器的代码。
4. 框架在各种浏览器乃至IE8版本以下浏览器均能使用。
5. 支持资源统一管理，自动处理html、css、js中的资源引用，支持无损压缩图片输出等功能。
6. 框架能够进行智能分析，对框架中没有使用到的方法不会打包到项目工程里，真正做到干净。
7. 内置路由系统，内置数十种页面切换效果，可以方便的制作SPA页面。
8. 内置多种内置方法，并支持扩展。
9. 支持对js,css进行美化输出

### 2. 快速上手

安装
```
npm i -g ozzx
```
创建示例项目
```
pack init test
```
打开示例文件夹
```
cd test
```
安装依赖包
```
npm i 或 yarn
```
运行或者编译
```
pack dev 或者 pack build
```

### 3. 内置方法

1. $go - 跳转到其他页面

| 参数        | 含义        | 类型   |  必须  |
| ----------- |:-------------:| -----:| -----:|
| pageName     | 页面名称 |   string     |   是     |
| in        |   页面入场动画   |   string   |   否     |
| out        |    页面离开动画    |  string  |   否     |


### 4. 其他
### 1.getPopPosition

```
/**
 * 智能计算弹窗合适出现的位置
 * @param  {number} areaW 区域的宽度
 * @param  {number} areaH 区域的高度
 * @param  {number} boxW  弹窗的高度
 * @param  {number} boxH  弹窗的高度
 * @param  {number} x     出现点的X轴坐标
 * @param  {number} y     出现点的Y轴坐标
 * @return {object} 返回合适的位置信息
 */
```

### 2.getScreenInfo

```
/**
 * 获取屏幕信息
 * @return {object} 屏幕信息
 */
```

### 3.smoothChange

```
/**
 * 平滑的改变值
 * @param  {number} startValue 初始数值
 * @param  {number} endValue   结束数值
 * @param  {number} time       持续次数
 * @param  {number} step       步长
 * @param  {function} callBack 回调函数
 * @return {object}            控制信息
 */
```

### 4.toast

```
/**
 * 显示toast提示
 * @param  {number} text       显示的文字
 * @param  {number} time       显示时长
 */
```

### 5.getQueryString

/**
 * 获取URL参数中字段的值
 * @param  {string} name 参数名称
 * @return {string} 返回参数值
 */


### 更新日志

#### 2019年4月11日
1. 美化html输出
2. 修复 “动画”集合为空 依然打包动画css的问题
3. 依赖包优化
4. 修复@for数组报错

#### 2019年4月5日

1. 增加模板缓存功能，重复的模板不需要重复处理

2. 修复重复使用同一模板 css和js会重复打包的问题