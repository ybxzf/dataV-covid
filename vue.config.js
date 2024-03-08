module.exports = {
  publicPath: "/",
  devServer: {
    host: "127.0.0.1", //这是我本机ip地址 // 自定义域名，需要在hosts文件里配置
    port: 8080,
    open: true, //vue项目启动时自动打开浏览器
    https: false,
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      "/api/v2": {
        //'/api'是代理的标识，用来告诉服务器，url前面的/api就是使用的代理
        target: "http://localhost:8896",
        changeOrigin: true, //是否要跨域
        // 路径重写
        //pathRewrite: {
        //	'^/api': ''
        //}
      },
      "/api/v3": {
        //'/api'是代理的标识，用来告诉服务器，url前面的/api就是使用的代理
        target: "http://localhost:8896",
        changeOrigin: true, //是否要跨域
        // 路径重写
        //pathRewrite: {
        //	'^/api': ''
        //}
      },
    },
  },
};
