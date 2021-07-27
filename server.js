const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./controllers');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout-tracker', {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//? Is there a Mongo synch?
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
