const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(require('./routes/homeRoutes'));
app.use(require('./routes/workoutRoutes'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
