const { User, FriendList } = require('../models')
const friendlist = require('../models/friendlist')

const getUserByName = async (req, res) => {
  try {
    let userName = req.params.userName
    let user = await User.findAll({
      where: { username: userName },
      attributes: ['id', 'username', 'image']
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
const getFriendListIfExist = async (req, res) => {
  try {
    let userId = req.params.userId
    let friendId = req.params.friendId
    let friendList = await FriendList.findAll({
      where: { userId: userId, friendId: friendId }
    })
    res.send(friendList)
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

const updateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let userUpdate = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(userUpdate)
  } catch (error) {
    throw error
  }
}

const deleteFollowing = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let followingId = parseInt(req.params.followerId)
    await FriendList.destroy({
      where: { userId: userId, friendId: followingId }
    })
    res.send({ message: `Unfollowed ${userId} from ${followingId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUserByName,
  createFollower,
  getFollowing,
  getFollowers,
  getFriendListIfExist,
  getUserById,
  updateUser,
  deleteFollowing
}
