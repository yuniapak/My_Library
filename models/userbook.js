'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UserBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserBook.belongsTo(models.User, { foreignKey: 'userId' })
      UserBook.belongsTo(models.Book, { foreignKey: 'bookId' })
    }
  }
  UserBook.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        field: 'userId',
        onDelete: 'CASACDE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      bookId: {
        type: DataTypes.INTEGER,
        field: 'bookId',
        onDelete: 'CASACDE',
        references: {
          model: 'books',
          key: 'id'
        }
      },
      status: DataTypes.STRING,
      library: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'UserBook',
      tableName: 'userbooks'
    }
  )
  return UserBook
}
