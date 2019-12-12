// 进行数据访问层的操作，如访问数据库，调用第三方接口获取数据等
// 为controller提供Model数据的Service文件
module.exports = {
  login: async (name, password) => {
    // let { name, password } = ctx.request.body
    let data;
    if (name === 'qianyb' && password === '123456') {
      data = `Hello, ${name}!`
    } else {
      data = '账号信息错误'
    }
    return data
  }
}
