const router = require('express').Router();
const Workout = require('../../models/');

router.get('/', (req, res) => {
  try {
    const workoutData = await Article.findAll({});

    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    res.render('/', { 
      workouts, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {

})
.catch(err => {
  res.status(400).json(err);
});
});

router.get('/range', (req, res) => {

})
.catch(err => {
  res.status(400).json(err);
});
});

module.exports = router;
