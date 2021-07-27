const router = require('express').Router();
const Workout = require('../models');

//CRUD HERE
//For Home routes, are we just returning the html pages?

router.get('/', async (req, res) => {
    try {
        res.render('index');
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/stats', async (req, res) => {
    try {
        res.render('stats');
    } catch (err) {
        res.status(400).json(err);
    }

})

router.get('/exercise', async (req, res) => {
    try {
        res.render('exercises');
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;