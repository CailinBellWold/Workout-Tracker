//Routes work, but multiple workouts on one day lead to the dashboard showing the same day multiple times; once for each workout. Is this the expected behavior?
const router = require('express').Router();
const Workout = require('../models/workout.js'); 

//WORKS
router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//WORKS
router.put('/api/workouts/:id', async (req, res) => {
  Workout.findByIdAndUpdate(req.params.id,
    {
      $push: { exercises: req.body }
    },
    { 
      new: true 
    },
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
});

//WORKS
router.post('/api/workouts', async (req, res) => {
  Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
  }).catch(err => {
    res.status(400).json(err);
  });
});

//WORKS
router.get('/api/workouts/range', async (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .sort({ day: -1 })
    .limit(7)
    .sort({ day: 1 })
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
