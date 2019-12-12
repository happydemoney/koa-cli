/**
 * 用户业务操作
 */

const userModel = require('./../models/user')

module.exports = {
  /**
   * 创建用户
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async createUser (user) {
    let result = await userModel.createUser(user)
    return result
  },
  /**
   * 查找存在用户信息
   * @param  {object} formData 查找的表单数据
   * @return {object|null}      查找结果
   */
  async getUser ( formData ) {
    let resultData = await userModel.getUser({
      'name': formData.name
    })
    return resultData
  },
  /**
   * 更新用户
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async updateUser (user, updateId) {
    let result = await userModel.updateUser(user, updateId)
    return result
  }
}