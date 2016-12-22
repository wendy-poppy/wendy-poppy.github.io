var path = require('path');
var webpack = require('webpack')
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
// 模块导入
module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    // entry: ['./src/index','./src/manor'], //只能生成一个out文件

    entry:{   //生成多个out文件，文件名就是属性名
        index: './src/index',
        manor: './src/manor',
        news: './src/news',
        product: './src/product',
        grape: './src/grape',
        technology: './src/technology',
        message: './src/message',
        concat: './src/concat',

    },
    // 输出
    output: {
        path: path.join(__dirname, 'dest/js'),
        //path:__dirname+'/dist/',
        // 文件地址，使用绝对路径形式
        filename: '[name].js',// 主要用于多个入口点--对应多个出口点
        //[name]这里是webpack提供的根据路口文件自动生成的名字

        //就是因为url-loader的问题，路径烦死了，以后这个项目这样安排目录结构吧
        //publicPath: 'dest/'
        
    },
    // 加载器
    module: {
        // 加载器
        loaders: [
            // 解析.vue文件
            { test: /\.vue$/, loader: 'vue' },
            // 转化ES6的语法
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            // 编译css并自动添加css前缀
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            //.scss 文件想要编译，scss就需要这些东西！来编译处理
            //install css-loader style-loader sass-loader node-sass --save-dev
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            // 图片转化，小于32K自动转化为base64的编码 因为IE8最大支持32K 的base64
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=32000&name=../img/[name].[ext]'}, //相对于上面的outpath
            //html模板编译？
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },

    // 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },

     // 启用观察  不用-w了
    watch: true, // boolean

    resolve: {
        // import require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他  感觉不加更好点？？
        alias: {
            'vue$': 'vue/dist/vue.js',   //给vue/dist/vue.js起个别名vue   然后后面才可以直接import Vue from "vue";
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    // plugins: [    
    //     // 抑制压缩后语法不规范的警告提示   并且强制以压缩格式转化js文件 “监听慢” 最后再用
    //     new webpack.optimize.UglifyJsPlugin({
    //       minimize: true,
    //       compress: {
    //         warnings: false,
    //       },
    //     }),
    // ]
    
};