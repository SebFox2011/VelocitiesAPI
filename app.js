const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require ('dotenv').config();
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var stationsRouter = require('./routes/stations');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stations', stationsRouter);

/*mongoose.connect("mongodb+srv://SebFox:"+process.env.DB_PASSWORD+"@clustersebfox-gdyhp.gcp.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => console.log('Connexion à MongoDB ok'))
    .catch(() => console.log('Connexion à MongoDB failed'));*/


module.exports = app;