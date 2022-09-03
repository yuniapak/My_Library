const Router = require('express').Router()
const controllers = require('../controllers/UserControllers')

Router.get('/:id', controllers.getUserById)
Router.post('/:id/:friendId', controllers.createFollower)
Router.get('/following/:id', controllers.getFollowing)
Router.get('/followers/:id', controllers.getFollowers)
module.exports = Router
