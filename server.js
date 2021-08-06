const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout-tracker', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(require('./routes/homeRoutes'));
app.use(require('./routes/workoutRoutes'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
