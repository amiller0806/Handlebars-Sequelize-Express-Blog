const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model
class Post extends Model {}


// create fields/columns for Post model
Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  post_contents: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  post_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW

  }
}, {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'post'
});

module.exports = Post;