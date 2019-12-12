const router = require('@koa/router')()
const HomeController = require('../controllers/home')
const UserController = require('../controllers/user')
module.exports = (app) => {
  // root dir request handle
  router
    .get('/', HomeController.index)
    .get('/login', HomeController.login.get)
    .post('/login', HomeController.login.post)
    .post('/user', UserController.createUser)
    .get('/user', UserController.getUser)
    .put('/user/:id', UserController.updateUser)
  app.use(router.routes()).use(router.allowedMethods())
}