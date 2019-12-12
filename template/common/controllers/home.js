// 存放响应http请求的业务逻辑代码
const HomeService = require('../services/home')
module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>'
  },
  login: {
    get: async (ctx, next) => {
      ctx.response.body = '<h1>login page</h1>'
    },
    post: async (ctx, next) => {
      let { name, password } = ctx.request.body
      let data = await HomeService.login(name, password)
      ctx.response.body = data
    }
  }
}