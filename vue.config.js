module.exports= {
    // 基本路径
    publicPath: '/',//注意新版本这里改成了publicpath
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    productionSourceMap: false,
    integrity: true,
    chainWebpack: config => {
        // console.log(process.env.analyzer,'-----------------777777777777777');
        if (process.env.analyzer) {     // 分析
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);

        }
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }));

    },
    // configureWebpack: (config)=>{
    //     console.log(process.env.NODE_ENV,'NODE_ENV---');
    //     if(process.env.NODE_ENV === 'production'){
    //         config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    //     }
    // }
}