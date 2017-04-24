var path = require("path");
var webpack = require("webpack");
//HtmlWebpackPlugin是webpack生成html的插件
var HtmlWebpackPlugin = require("html-webpack-plugin");
//ExtractTextPlugin将样式单独提取到css文件里，而不是写在js里
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//自动添加css3样式前缀
var autoprefixer = require("autoprefixer");
module.exports = {
  context:path.resolve(__dirname,"src"),
  entry: {
    index: "./js/page/index.js",         //首页入口
    list: "./js/page/list.js",         //搜索页入口
    release: "./js/page/release.js",     //发布项目页入口
    register: "./js/page/register.js",   //信息完善页入口
    user: "./js/page/user.js",           //用户资料入口
  },
  output: {
    path: path.resolve(__dirname,"dist"),              //输出的打包文件相对于这个路径
    filename: "js/[name].js", //打包后的JS文件名字
    chunkFilename:"js/[id].chunk.js"     //chunk生成配置
  },
  devServer:{
    contentBase: path.join(__dirname, "asstes"),
    inline:true,
    compress: true,
    port:8080,
    hot:true,
    publicPath:"/dist", 
  },
  module: {
    loaders: [
      {
        //css加载器,执行顺序从右到左
        test: /\.css$/,
        loaders: "style-loader!css-loader!postcss-loader"
      },
      {
        //less加载器
        test:/\.less$/,
        loader: ExtractTextPlugin.extract({fallback:"style-loader",use:"css-loader!postcss-loader!less-loader"})
      },
      {
        //html模板加载器
        test: /\.html$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "html-loader"
      },
      {
        //图片加载器,可以将较小的图片转成base64，减少http请求
        //如下配置，将小于8192byte的图片转成base64码
        test: /\.(png|jpg|gif)$/i,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
      },
      {
        //文件加载器,处理静态资源
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=./fonts/[name].[ext]',
        exclude: path.resolve(__dirname, "node_modules")
      }
    ]
  },
  plugins: [
    //index页面的配置
    new HtmlWebpackPlugin({
      filename: "index.html",          //index页面打包后的文件名
      template: "./view/common.html",   //index页面的模板文件
      inject: "body",                  //js文件放在body
      chunks: ["vendors","index"],      //需要加入的js文件
      title: "index"
    }),
    //list页面的配置
    new HtmlWebpackPlugin({
      filename: "list.html",
      template: "./view/common.html",
      inject: "body",
      chunks:["vendors","list"],
      title: "list"
    }),
    //release页面你的配置
    new HtmlWebpackPlugin({
      filename: "release.html",
      template: "./view/common.html",
      inject: "body",
      chunks:["vendors","release"],
      title: "release"
    }),
    //register页面的配置
    new HtmlWebpackPlugin({
      filename: "register.html",
      template: "./view/common.html",
      inject: "body",
      chunks:["vendors","register"],
      title: "register"
    }),
    //user页面的配置
    new HtmlWebpackPlugin({
      filename: "user.html",
      template: "./view/common.html",
      inject: "body",
      chunks:["vendors","user"],
      title: "user"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendors",                                      // 将公共模块提取，生成名为vendors的chunk
      chunks: ["index","list","release","register","user"], //提取哪些模块共有的部分
      minChunks: 5                                          // 提取至少3个模块共有的部分
    }),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [autoprefixer];
        }
      }
    })
  ],
  externals: {
    jquery: "window.$"
  },
  resolve: {
   extensions: ['.js', '.jsx']
 }
}