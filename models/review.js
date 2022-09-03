'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, { foreignKey: 'userId' })
      Review.belongsTo(models.Book, { foreignKey: 'bookId' })
    }
  }
  Review.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        field: 'userId',
        reference: {
          model: 'users',
          key: 'id'
        }
      },
      bookId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        field: 'bookId',
        reference: {
          model: 'books',
          key: 'id'
        }
      },
      comment: DataTypes.STRING,
      rating: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
