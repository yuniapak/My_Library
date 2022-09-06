const Router = require('express').Router()
const controllers = require('../controllers/UserControllers')

Router.get('/userName', controllers.getUserByName)
Router.post('/:id/:friendId', controllers.createFollower)
Router.get('/following/:id', controllers.getFollowing)
Router.get('/followers/:id', controllers.getFollowers)
Router.get('/userId/:userId', controllers.getUserById)
module.exports = Router
