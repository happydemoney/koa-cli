const supertest = require('supertest')
const chai = require('chai')
const app = require('./../index')

const expect = chai.expect
const request = supertest( app.listen() )

// 测试套件/组
describe( 'service-api接口单元测试', ( ) => {

  // 测试用例
  it('/login get接口测试', ( done ) => {
      request
        .get('/login')
        .expect(200)
        .end(( err, res ) => {
            // 断言判断结果是否为object类型
            expect(res.body).to.be.an('object')
            // expect(res.body.success).to.be.an('boolean')
            // expect(res.body.data).to.be.an('string')
            done()
        })
  })
  it('/login post接口测试', ( done ) => {
    request
      .post('/login')
      .send({name: 'qianyb', password: '123456'})
      .expect(200)
      .end(( err, res ) => {
          // 断言判断结果是否为object类型
          expect(res.body).to.be.an('object')
          // expect(res.body.success).to.be.an('boolean')
          // expect(res.body.data).to.be.an('string')
          done()
      })
  })
  it('/user post接口测试', ( done ) => {
    request
      .post('/user')
      .send({name: 'qianyb2', password: '123456', create_time: '2019-12-11 18:31:00', modified_time: '2019-12-11 18:31:00'})
      .expect(200)
      .end(( err, res ) => {
          // 断言判断结果是否为object类型
          expect(res.body).to.be.an('object')
          expect(res.body.success).to.be.an('boolean')
          // expect(res.body.data).to.be.an('string')
          done()
      })
  })
  it('/user get接口测试', ( done ) => {
    request
      .get('/user')
      .query({name: 'qianyb2'})
      .expect(200)
      .end(( err, res ) => {
          // 断言判断结果是否为object类型
          expect(res.body).to.be.an('object')
          expect(res.body.success).to.be.an('boolean')
          expect(res.body.data).to.be.an('object')
          done()
      })
  })
  // user 更新 qianyb2 的密码 1234567
  it('/user put接口测试', ( done ) => {
    request
      .put('/user/14')
      .send({name: 'qianyb90', password: 985555})
      .expect(200)
      .end(( err, res ) => {
          // 断言判断结果是否为object类型
          expect(res.body).to.be.an('object')
          expect(res.body.success).to.be.an('boolean')
          done()
      })
  })
})
