
//// POST MODEL

// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

// Table/column config
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize: sequelize, // Pass the Sequelize instance correctly
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post', // Specify the correct model name
    }
);

// Export
module.exports = Post;
