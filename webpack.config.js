const path = require('path');
//启用热更新的第二部
const webpack = require('webpack');
//导入在内存中生成html页面的插件
//只要是插件都一定放入plugin节点中去
//作用1：自动在内存中根据指定页面生成一个内存页面
//作用2：自动把打包好的bundle.js追加到页面中去
const htmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        // 这是配置dev-server命令的第二种方式相对来说麻烦一些
        open:true,//自动打开浏览器
        port:3000,//设置启动的端口
        // contentBase:'src',//指定托管根目录
        hot:true//启用热更新的第一步
    },
    plugins:[
        //配置插件的节点
        new webpack.HotModuleReplacementPlugin(),//这是new一个热更新的模块对象，最后一步
        new htmlWebpackPlugin({//创建一个在内存中生成html页面插件
            template:path.join(__dirname,'./src/index.html'),//指定模板页面，将来根据指定的页面路径，
            // 去生成内存中的页面
            filename: "index.html"//指定生成的页面名称
        }),
        new VueLoaderPlugin(),
    ],
    mode: 'development',
    module:{
        //这个节点用于配置所有的第三方模块加载器
        rules:[
            //所有第三方匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']},//配置处理.css文件的第三方loader规则
            //
            //注意：webpack处理第三方文件类型的过程
            //1.发现要处理的文件不是js类型，然后就去配置文件中查看有没有第三方loader规则，
            //2.如果能找到对应的规则就会调用对应的loader处理这种文件类型
            //3.调用loader从后往前调用，先调用后面的css-loader，后交给前面的style-loader进一步处理
            //4.当最后的一个loader调用完毕之后，会把处理的结果交给webpack进行打包合并，最终输出到bundle.js
            {test: /\.less$/, use: ['style-loader', 'css-loader','less-loader']},
            //配置处理less文件的第三方loader规则
            {test: /\.jpg|png|gif|jpeg|bmp$/, use: 'url-loader?limit=330&name=-[hash:8]-[name].[ext]'},//处理图片路径loader
            //limit给定的值是图片的大小单位是byte，如果我们引用的图片大于或等于limit的值就不会进行base64编码
            //如果小于limit的值就会进行base64编码
            {test:/\.ttf|svg|eot|woff|woff2$/,use:'url-loader'},//处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//这是配置babel转换高级的ES语法
            {test:/\.vue$/,use:'vue-loader'},//处理.vue文件的loader
        ]
    },
    resolve:{
        alias:{//修改vue包被导入时的路径
            "vue$":"vue/dist/vue.min.js"
        }
    }
};
//使用webpack-dev-server这个工具实现自动打包编译功能
//1.运行 npm i webpack-dev-server -D把这个工具安装到本地项目开发依赖
//2.安装完毕后这个用法和webpack用法完全一样
//3.由于我们是在项目中（本地中）安装的webpack-dev-server所以无法把他当作脚本命令，
// 无法在powershell终端中直接运行；（只有哪些安装全局 -g的工具才能在终端中正常执行）
//4.webpack-dev-server如果想要正常使用必须在本地安装webpack哪怕全局安装了webpack也不行
//4.0以上也要本地安装webpack-cli
//5.webpack-dev-server帮我们打包生成的js文件并没有存放到实际的物理磁盘上，而是直接托管到了电脑内存中
//所以我们在项目根目录中根本找不到bundle.js
//6.我们可以认为webpack-dev-server把打包好的文件，以一种虚拟的形式托管到了咱们项目的根目录中，
// 虽然我们看不到他，但是可以认为，和dist，src，node_modules平级，有一个看不见的文件