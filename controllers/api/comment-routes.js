const router = require('express').Router();
const { comment, Comment } = require('../../models');

router.get('/', (req, res) => {

});

router.post('/', (res, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
    .them=n(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.statusCode(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        },
    })
    .then((dbCommentData) => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(dbCommentData);
    }) 
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;