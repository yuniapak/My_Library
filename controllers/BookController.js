const { Book, UserBook } = require('../models')

const createBook = async (req, res) => {
  try {
    let newBook = await Book.create(req.body)
    res.send(newBook)
  } catch (error) {
    throw error
  }
}
const getBookById = async (req, res) => {
  try {
    let book = await Book.findByPk(req.params.bookId, {})
    res.send(book)
  } catch (error) {
    throw error
  }
}

const getBookByTitle = async (req, res) => {
  try {
    let bookTitle = req.query.search
    let book = await Book.findAll({ where: { title: bookTitle } })
    res.send(book)
  } catch (error) {
    throw error
  }
}

const getBookByAuthor = async (req, res) => {
  try {
    let bookAuthor = req.query.search
    let book = await Book.find({ title: bookAuthor })
    res.send(book)
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

const getAllUserBooksLibraries = async (req, res) => {
  try {
    const getLibraries = await UserBook.findAll({
      where: { userId: req.params.userId },
      attribute: ['library']
    })
    res.send(getLibraries)
  } catch (error) {
    throw error
  }
}
const getAllUserBooksByLibrary = async (req, res) => {
  try {
    let user = req.params.userId
    let library = req.params.library
    let books = await UserBook.findAll({
      where: { userId: user, library: library },
      include: [{ model: Book }]
    })
    res.send(books)
  } catch (error) {
    throw error
  }
}
const deleteUserBook = async (req, res) => {
  try {
    let userbookId = req.params.bookId
    await UserBook.destroy({
      where: {
        id: userbookId
      }
    })
    res.send({ message: `Deleted ${userbookId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createBook,
  getBookById,
  getBookByTitle,
  getBookByAuthor,
  createUserBook,
  updateUserBook,
  getAllUserBooksLibraries,
  getAllUserBooksByLibrary,
  deleteUserBook
}
