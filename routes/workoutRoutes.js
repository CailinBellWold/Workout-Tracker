const router = require('express').Router();
const Workout  = require('../models/workout.js'); 

// router.get('/api/workouts', (req, res) => {
//     Workout.find({})
//       .then(workoutData => {
//         res.json(workoutData);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

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


// router.put('/api/workouts/:id', async (req, res) => {

// })
// .catch(err => {
//   res.status(400).json(err);
// });




// router.post('/api/workouts', async (req, res) => {

// })
// .catch(err => {
//   res.status(400).json(err);
// });


// router.delete('/api/workouts', async (req, res) => {

// })
// .catch(err => {
//   res.status(400).json(err);
// });


// router.get('/api/workouts/range', async (req, res) => {

// })
// .catch(err => {
//   res.status(400).json(err);
// });


module.exports = router;