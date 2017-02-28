var htmlWebpackPlugin = require('html-webpack-plugin'); //建立对插件的引用
 // common.js模块化文件配置
module.exports = {
  entry:'./src/script/app.js',
  output:{
    path:'./dist',          //打包后的文件输出位置
    filename:'js/[name].bundle.js',      //打包后的文件名字
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:'./node_modules/',
        include:'./src/',
        query:{
          presets:['latest']
        }
      }
    ]
  },
  plugins:[
 new htmlWebpackPlugin({
   filename:'index.html',  //文件名
   inject:'body',   //脚本嵌入位置，可head或body
   template:'index.html',
   title:'This is main.html'
 })  //插件初始化,传参可把根目录index.html与动态打包生成的index.html建立联系
  ]
};
