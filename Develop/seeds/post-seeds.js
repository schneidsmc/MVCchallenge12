// post from models
const { Post } = require('../models');


// post data
const postData = [
    {
        title: 'THIS IS WILD',
        content: 'love this blog',
        user_id: 1
    },
    {
        title: 'It is raining',
        content: 'at least it isnt snow',
        user_id: 2
    },
    {
        title: 'Lifelong learner',
        content: 'I learn so much here!',
        user_id: 3
    }
]

// bulk create
const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;
// export