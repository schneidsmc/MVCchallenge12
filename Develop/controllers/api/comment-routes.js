// express
// comment model
// utils auth
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get comments
router.get('/', (req, res) => {
// access comment model
Comment.findAll()
.then (dbCommentData => res.json(dbCommentData))
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
})
    
// post comments
router.post('/', (req, res) => {
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        .then (dbCommentData => res.json(dbCommentData))
        .catch(err => {
             console.log(err);
             res.status(400).json(err);
         });
        }
    });

// delete comments
router.delete(':/id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then (dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found.' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
         console.log(err);
         res.status(500).json(err);
    })
})


// export
module.exports = router