module.exports = {
  //声明babel可以的插件
  //在将来webpack调用babel-loader的时候，会先加载plugins的插件
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ]
}