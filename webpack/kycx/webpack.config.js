let path=require("path")
let Webpack = require('webpack');
module.exports={
    mode:"development",  //配置打包模式
    entry:'./src/index.js', //入口配置
    output:{               //出口配置
            path:path.resolve(__dirname,'public'), //path必须是绝对路径
            filename:'main.js',
            assetModuleFilename: 'imgs/kycx/[hash][ext][query]'  //自定义路径
          },
    devServer:{
       //配置webpack-dev-server
    },
    module:{
      //配置loader
      rules:[
        {
          test:/\.css$/i,
          use:["style-loader","css-loader"]
        },
        // {
        //   test:/\.(gif|jpg|png|woff|svg|eot|ttf)$/,
        //   use:[{
        //     loader:"url-loader",
        //     options:{
        //       limit:8192,
        //       name:"images/[hash:8][name].[ext]"
        //     }
        //   }]
        // },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
      ]
    },
    plugins:[
      new Webpack.ProvidePlugin({
        '$':'jquery'
      })
    ]  //配置webpack插件
}