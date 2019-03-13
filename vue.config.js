const devProxy = ['/admin', 'public'];  // 代理路径前缀
var proxyConfig = require('./config')
const env = process.env.NODE_ENV;
let target = '';
// 默认是本地环境
if (env === 'production') {  // 生产环境
    target = proxyConfig.prod;
} else if (env === 'test'){ // 测试环境
    target = proxyConfig.test;
} else {  // 本地环境
    target = proxyConfig.dev;
}
// 生成代理配置对象
let proxyObj = {};
devProxy.forEach((value, index) => {
    proxyObj[value] = {
        target: target,
        changeOrigin: true,
        pathRequiresRewrite: {
          [`^${value}`]: ''
        },
        pathRewrite: {[`^${value}`] : ''},
        onProxyReq: function(proxyReq, req, res) {
          // proxyReq.setHeader('cookie', proxyConfig.cookie)
          // proxyReq.setHeader('Authorization', proxyConfig.Authorization)
          var log = proxyReq.method + '----------->' + proxyReq.path
          console.info(log)
        }
    };
});
module.exports = {
  devServer: {
    proxy: proxyObj
  },
  assetsDir: 'statics',
    filenameHashing: false,
    productionSourceMap: false,
    lintOnSave: undefined
}