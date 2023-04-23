// 使用Node.js中的导出语法，向外导出一个webpack的配置对象
const path = require('path')
// 导入clean-webpack-plugin案例
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 1、导入html-webpack-plugin插件，得到构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2、创建html插件的实例
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html', //源路径
  filename: './index.html' //目标路径

})

module.exports = {
  // 在开发调试阶段，建议把devtool设置为eval-source-map
  // devtool: 'eval-source-map',
  // 在生产环境下，建议把devtool设置为nosources-source-map或直接关闭source-map
  devtool: 'nosources-source-map',
  // mode表示webpack的运行模式，有可选值 development和production
  mode: 'development',
  // entry:指定打包入口文件
  entry: path.join(__dirname, './src/index.js'),
  //output:指定打包输出文件
  output: {
    //path: path.join(__dirname, './dist/'), //输出文件目录
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  plugins: [htmlPlugin, new CleanWebpackPlugin()], //3、是htmlplugin插件生效
  devServer: { 
    open: true, //首次启动，自动打开浏览器
    host: '127.0.0.1', //实时打包的主机地址
    port: 80 // 实时打包的端口号
  },
  module: {
    rules: [
      // 定义不同模块对应的loader(注意：顺序要一直，且调用顺序是从后往前的)
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      // 处理.less文件的loader
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      // 处理加载图片的loader
      // url-loader?limit=22229&outputPath=images
      // 指定limit和打包存放路径（/dist/images）
      {test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229&outputPath=images'},
      // 处理js高级语法的babel-loader
      // exclude: 排除处理第三方包中的js高级语法
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  },
  resolve: {
    alias: {
      // 告诉webpack，@被指定为src目录
      '@': path.join(__dirname, './src/')
    }
  }
}