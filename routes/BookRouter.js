const Router = require('express').Router()
const controller = require('../controllers/BookController')

Router.post('', controller.createBook)
Router.post('/userbook/:userId/:bookId', controller.createUserBook)
Router.put('/userbook/:userbookId', controller.updateUserBook)

module.exports = Router
