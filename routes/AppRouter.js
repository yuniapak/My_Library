const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const BookRouter = require('./BookRouter')
Router.use('/auth', AuthRouter)
Router.use('/user', UserRouter)
Router.use('/book', BookRouter)
module.exports = Router
