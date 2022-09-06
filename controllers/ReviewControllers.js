const { User, Review } = require('../models')

const getReviewsByBook = async (req, res) => {
  try {
    let bookId = parseInt(req.params.bookId)
    let reviews = await Review.findAll({
      where: { bookId: bookId },
      include: [{ model: User }]
    })
    res.send(reviews)
  } catch (error) {
    throw error
  }
}
const createReview = async (req, res) => {
  try {
    let bookId = parseInt(req.params.bookId)
    let userId = parseInt(req.params.userId)
    let body = {
      bookId: bookId,
      userId: userId,
      ...req.body
    }
    let review = await Review.create(body)
    res.send(review)
  } catch (error) {
    throw error
  }
}
const updateReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.reviewId)
    let updatedReview = await Review.update(req.body, {
      where: { id: reviewId },
      returning: true
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

const deleteReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.reviewId)
    await Review.destroy({
      where: {
        id: reviewId
      }
    })
    res.send({ message: `Deleted ${reviewId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getReviewsByBook,
  createReview,
  updateReview,
  deleteReview
}
