const Router = require('express').Router()
const controllers = require('../controllers/UserControllers')

Router.get('/:userName', controllers.getUserByName)
Router.post('/:id/:friendId', controllers.createFollower)
Router.get('/following/:id', controllers.getFollowing)
Router.get('/followers/:id', controllers.getFollowers)
Router.get('/userId/:userId', controllers.getUserById)
Router.delete('/:userId/:followerId', controllers.deleteFollowing)
module.exports = Router
