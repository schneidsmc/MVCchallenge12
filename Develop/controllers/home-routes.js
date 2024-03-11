// sequelize
// post user comment models

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


// render homepage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'content',
            'title',
            'created_at',
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbUserData => {
        const posts = dbPostData.map(post => ({ plain:true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        })
    })
    .catch(err => {
         console.log(err);
         res.status(500).json(err);
 
    })
})

// render single post page
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'content',
            'title',
            'created_at',
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found.' });
            return;
        }
        const post = dbPostData.get({ plain: true});
        res.render('single-post', { post, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
         console.log(err);
         res.status(500).json(err);
    })
})

// render login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
})

// render sign up page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
})

// export
model.exports = router;