const Router = require('express').Router()
const controller = require('../controllers/ReviewControllers')

Router.get('/:bookId', controller.getReviewsByBook)
Router.post('/:bookId/:userId', controller.createReview)
Router.put('/:reviewId', controller.updateReview)
Router.delete('/:reviewId', controller.deleteReview)

module.exports = Router