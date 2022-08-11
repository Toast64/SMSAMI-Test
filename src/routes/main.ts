import express from 'express';
import * as MainController from '../controllers/mainController';
const router = express.Router();
const db = require('../models/db');

let mc = new MainController.MainController();


router.get('/', mc.mainView);

router.get('/showposts', mc.showView);

router.get('/createpost', mc.createView)

router.get('/updatePost', mc.updateView)

router.get('/showall', (req, res) => {
    db.query('SELECT * FROM posts', (err: any, results: any) => {
        if (err) throw err;
        res.send(results);
    });
});

router.post('/updateVotes', (req, res) => {
    db.query('UPDATE posts SET upvotes = ? WHERE id = ?', [req.body.upvotes, req.body.id], (err: any) => {
        if (err) throw err;
        res.send("data updated");
    });
});

router.post('/downVotes', (req, res) => {
    db.query('UPDATE posts SET downvotes = ? WHERE id = ?', [req.body.downvotes, req.body.id], (err: any) => {
        if (err) throw err;
        res.send("data updated");
    });
});

router.post('/createPost', (req, res) => {
    db.query('INSERT posts SET description = ?, upvotes=0, downvotes=0', [req.body.description], (err: any) => {
        if (err) throw err;
        res.send("data updated");
    })
})

router.post('/deletePost', (req, res) => {
    db.query('DELETE FROM posts WHERE id = ?', [req.body.id], (err: any) => {
        if (err) throw err;
        res.send("data deleted");
    })
})

router.post('/updatePost', (req, res) => {
    db.query('UPDATE posts SET description = ? WHERE id = ?', [req.body.description, req.body.id], (err: any) => {
        if (err) throw err;
        res.send("data updated");
    })
})

module.exports = router;