const { Book, UserBook } = require('../models')

const createBook = async (req, res) => {
  try {
    let newBook = await Book.create(req.body)
    res.send(newBook)
  } catch (error) {
    throw error
  }
}

const createUserBook = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let bookId = parseInt(req.params.bookId)
    let body = {
      userId: userId,
      bookId: bookId,
      ...req.body
    }
    let newBook = await UserBook.create(body)
    res.send(newBook)
  } catch (error) {
    throw error
  }
}

const updateUserBook = async (req, res) => {
  try {
    let userbook = parseInt(req.params.userbookId)
    let updateduserbook = await UserBook.update(req.body, {
      where: { id: userbook },
      returning: true
    })
    res.send(updateduserbook)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createBook,
  createUserBook,
  updateUserBook
}
