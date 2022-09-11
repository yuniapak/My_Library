const Router = require('express').Router()
const controllers = require('../controllers/UserControllers')

Router.get('/:userName', controllers.getUserByName)
Router.post('/:id/:friendId', controllers.createFollower)
Router.get('/following/:id', controllers.getFollowing)
Router.get('/followers/:id', controllers.getFollowers)
Router.get('/friendList/:userId/:friendId', controllers.getFriendListIfExist)
Router.get('/userId/:userId', controllers.getUserById)
Router.put('/:userId', controllers.updateUser)
Router.delete('/:userId/:followerId', controllers.deleteFollowing)
module.exports = Router
