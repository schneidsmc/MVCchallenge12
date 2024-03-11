// export all the models

// User
const User = require('./models/user');

// post
const Post = require('./models/post');

// comment
const Comment = require('./models/comment');

// association between models
    // user-post
    User.hasMany(Post, {
        foreignKey: 'user_id'
    });
    // post-user
    Post.belongsTo(User, {
        foreignKey: 'user_id'
    });
    // comment-user
    Comment.belongsTo(User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        hooks: true
    });
    // comment-post
    Comment.belongsTo(Post, {
        foreignKey: 'post_id',
        onDelete: 'CASCADE',
        hooks: true
    });
    // user-comment
    User.hasMany(Comment, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        hooks: true
    });
    // post-comment
    Post.hasMany(Comment, {
        foreignKey: 'post_id',
        onDelete: 'CASCADE',
        hooks: true
    });


// export
module.exports = { User, Post, Comment };