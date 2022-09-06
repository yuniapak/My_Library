const { User, FriendList } = require('../models')
const friendlist = require('../models/friendlist')

const getUserByName = async (req, res) => {
  try {
    let userName = req.query.search
    let user = await User.findByPk({
      username: userName,
      attributes: ['username', 'image']
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const createFollower = async (req, res) => {
  try {
    let user = parseInt(req.params.id)
    let friend = parseInt(req.params.friendId)
    let body = {
      userId: user,
      friendId: friend
    }
    let newFollow = await FriendList.create(body)
    res.send(newFollow)
  } catch (error) {
    throw error
  }
}

const getFollowing = async (req, res) => {
  try {
    let userId = parseInt(req.params.id)
    let following = await FriendList.findAll({
      where: { userId: userId }
    })
    res.send(following)
  } catch (error) {
    throw error
  }
}
const getFollowers = async (req, res) => {
  try {
    let userId = parseInt(req.params.id)
    let followers = await FriendList.findAll({
      where: { friendId: userId }
    })
    res.send(followers)
  } catch (error) {
    throw error
  }
}

const getUserById = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let user = await User.findByPk(userId, {
      attributes: ['username', 'image']
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

// const deleteFollowing = async(req,res)=>{
//     try{
//     let userId =
//     let followingId =
//     }catch(error){
//         throw error
//     }
// }

module.exports = {
  getUserByName,
  createFollower,
  getFollowing,
  getFollowers,
  getUserById
}
