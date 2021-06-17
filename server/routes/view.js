const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/income', function (req, res) {
    res.render('income');
});

router.get('/expense', function (req, res) {
    res.render('expense');
});


module.exports = router;
