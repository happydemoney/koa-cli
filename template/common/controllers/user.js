const userService = require('./../services/user')

module.exports = {
  // post
  async createUser (ctx) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
    }
    let userInfo = await userService.createUser( formData )
    if ( userInfo ) {
      result.data = userInfo
      result.success = true
    }
    ctx.body = result
  },
  // get
  async getUser (ctx) {
    const query = ctx.request.query
    let result = {
      success: false,
      message: '',
      data: null,
    }

    let userInfo = await userService.getUser( query )
    if ( userInfo ) {
      result.data = userInfo
      result.success = true
    }
    ctx.body = result
  },
  // put
  async updateUser (ctx) {
    let formData = ctx.request.body
    let updateId = ctx.request.url.replace('/user/', '')
    let result = {
      success: false,
      message: '',
      data: null,
    }
    let userInfo = await userService.updateUser( formData, updateId )
    if ( userInfo ) {
      result.data = userInfo
      result.success = true
    }
    ctx.body = result
  }
  // delete
  // async deleteUser (ctx) {
  // }
}
