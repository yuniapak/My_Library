const { Reviews } = require('../models')

const getReviewsByBook = async (req, res) => {
  try {
    let bookId = parseInt(req.params.bookId)
    let reviews = await Reviews.findAll({ where: { bookId: bookId } })
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
    let review = await Reviews.create(body)
    res.send(review)
  } catch (error) {
    throw error
  }
}
const updateReview = async (req, res) => {
  try {
    let reviewId = pardeInt(req.params.reviewId)
    let updatedReview = await Reviews.update(req.body, {
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
    let reviewId = pardeInt(req.params.reviewId)
    await Reviews.destroy({
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
