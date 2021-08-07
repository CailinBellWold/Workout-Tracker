# 18 NoSQL: Workout Tracker

[![License: MIT](https://img.shields.io/github/license/CailinBellWold/Team-Profile-Generator?style=plastic)](https://opensource.org/licenses/MIT)

## Description 

Create the back-end of a workout tracker using a Mongo database, Mongoose schema, and routes handled via Express. Front-end code was provided.

### Motivation

Learn to write CRUD using Mongoose and to deploy Heroku from a new database created in MongoDB Atlas. 

### Learning Targets
This exercise provided opportunities to test my budding skills with Mongo and Mongoose, and allowed further opportunities to develop pre-existing skills handling routes with Express.js. Also learned to seed a collection in a MongoDB Atlas database.

## Table of Contents
- [Core Objectives Met](#Core)
- [Technologies Used](#Technologies)
- [Local Installation & Usage](#Local)
- [Deployed App](#Deployed)
- [Demo](#Demo)
- [License](#MIT)
- [Questions](#Questions)

## Core Objectives Met

1. When a user loads the page, they are given the option to create a new workout or continue with their last workout.
2. A user can add exercises to the most recent workout plan. 
3. A user can add new exercises to a new workout plan.
4. A user can view the combined weight of multiple exercises from the past seven workouts on the 'stats' page.
5. A user can view the total duration of each workout from the past seven workouts on the 'stats' page.
6. The app is built using a MongoDB database.
7. The app is deployed to Heroku.

## Technologies Used 
- Heroku
- JavaScript
- Mongo
- [MongoDB Atlas] (https://www.mongodb.com/cloud/atlas)
- Mongoose
- Node.js
- [NPM Express.js Package](https://www.npmjs.com/package/express)
- [NPM Express-Session Package](https://www.npmjs.com/package/express-session)
- [NPM dotenv Package](https://www.npmjs.com/package/dotenv)
- [NPM nodemon Package](https://www.npmjs.com/package/nodemon)

## Local Installation & Usage

To use this app, you will need a MongoDB account, and to have the app installed on your machine. Documentation with installation instructions are available [here.](https://docs.mongodb.com/manual/installation/) 

STEP 1

    1.1 Clone this Workout-Tracker repo to your machine.

STEP 2

From your terminal, run:

    2.1 mongo

STEP 3

From a second terminal window, run:

    3.1 npm i
    3.2 npm run watch

STEP 4

From the modern browser of your choice, visit:

    4.1 http://localhost:3001

## Deployed App

[This Workout Tracker app has been deployed on Heroku and is available here.](https://workout-tracker-cailin.herokuapp.com/)

## Demo 

LINK | [Workout Tracker demo](https://drive.google.com/file/d/1JexrrdKI0UNX8lTOkF5iQlBZVF_y31eR/view)

View Homepage and add exercise to workout

![Workout Tracker Add Exercise to Workout.](/public/images/Workout-Tracker-Homepage-Add-Exercise-Demo.gif)

View data on Homepage and verify that it is populating the Dashboard

![Workout Tracker Dashboard Populating.](/public/images/Workout-Tracker-Dashboard-Demo.gif)

## MIT License

&copy;2021 Cailin Bell Wold

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions
For inquiries, please contact [Cailin Bell Wold](https://github.com/CailinBellWold).
