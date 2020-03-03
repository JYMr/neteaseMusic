module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // 引入scss全局变量
        prependData: `~@import "@/assets/variable.scss";`
      }
    }
  }
}
