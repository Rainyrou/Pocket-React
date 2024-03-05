// 用 vite 创建项目，配置 postcss 需使用 post.config.js，之前使用的 .postcssrc.js 已废弃
module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉. norem- 开头的 class，不进行 rem 转换
    })
  ]
};
