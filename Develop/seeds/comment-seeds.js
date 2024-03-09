// comment from models
const { Comment } = require('../models/');


// comment data
const commentData = [
    {
        comment_text: 'Gee this is neat!',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'This is another comment',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'This is yet another comment',
        user_id: 3,
        post_id: 1
    }
]

const seedCommentData = () => Comment.bulkCreate(commentData);
// bulkCreate

// export
module.exports = seedCommentData;

