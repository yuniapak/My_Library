const Router = require('express').Router()
const controller = require('../controllers/BookController')

Router.post('', controller.createBook)
Router.get('/bookTitle:', controller.getBookByTitle)
Router.get('/bookAuthor', controller.getBookByAuthor)
Router.post('/userbook/:userId/:bookId', controller.createUserBook)
Router.put('/userbook/:userbookId', controller.updateUserBook)
Router.get('/userbook/:userId', controller.getAllUserBooksLibraries)
Router.get('/library/:userId/:library', controller.getAllUserBooksByLibrary)

module.exports = Router
