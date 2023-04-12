const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    //不要eslintrc配置
    lintOnSave:false,

})
