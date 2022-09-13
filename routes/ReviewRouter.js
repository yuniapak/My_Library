const Router = require('express').Router()
const controller = require('../controllers/ReviewControllers')
const middleware = require('../middleware')

Router.get('/:bookId', controller.getReviewsByBook)
Router.get('/title/:bookName', controller.getReviewsByBookName)
Router.post('/:bookId/:userId', controller.createReview)
Router.put('/:reviewId', controller.updateReview)
Router.delete('/:reviewId', controller.deleteReview)

module.exports = Router
