var htmlWebpackPlugin = require('html-webpack-plugin'); //建立对插件的引用
 // common.js模块化文件配置
module.exports = {
  entry:{
    main:"./src/script/main.js",
    a:"./src/script/a.js",
    b:"./src/script/a.js",
    c:"./src/script/a.js"
  },
  output:{
    path:'./dist',          //打包后的文件输出位置
    filename:'js/[name].js',      //打包后的文件名字
    publicPath:'http://cdn.com/'  //项目上线后的打包文件的相对地址
  },
  plugins:[
 new htmlWebpackPlugin({
   filename:'index.html',  //文件名
   inject:false,   //脚本嵌入位置，可head或body
   template:'index.html',
   title:'webpack is good!',
   date:new Date(),

 })   //插件初始化,传参可把根目录index.html与动态打包生成的index.html建立联系
  ]
};
