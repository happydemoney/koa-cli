const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('./routers')
const config = require('./config')

const app = new Koa()

app.use(bodyParser())

router(app)

module.exports = app

// 端口监听
app.listen(config.port, () => {
  console.log(`server is running at http://localhost:${config.port}`)
})
