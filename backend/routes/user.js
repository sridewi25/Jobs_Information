const UserRoute = require('express').Router()
const UserController = require('../controllers/UserController')
const {authentication} = require('../middleware/auth')

UserRoute.get('/',UserController.getAllUser)
UserRoute.post('/register',UserController.createUser)
UserRoute.get('/info_user',authentication,UserController.getInfoUser)
UserRoute.post('/login',UserController.loginuser)

module.exports = UserRoute

