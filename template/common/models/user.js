const dbUtils = require('./../utils/db-util')

module.exports = {
  /**
   * 数据库创建用户
   * @param  {object} model 用户数据模型
   * @return {object}       mysql执行结果
   */
  async createUser ( model ) {
    let result = await dbUtils.insertData( 'user', model )
    return result
  },
  /**
   * 查找一个存在用户的数据
   * @param  {object} options 查找条件参数
   * @return {object|null}        查找结果
   */
  async getUser(options) {
    let _sql = `
    SELECT * from user
      where name="${options.name}"
      limit 1`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },
  async updateUser (model, updateId) {
    let result = await dbUtils.updateData( 'user', model, updateId )
    return result
  }
}
