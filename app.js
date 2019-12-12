const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require ('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const stationsRouter = require('./routes/stations');
const citiesRouter = require ('./routes/cities');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stations', stationsRouter);
app.use('/cities',citiesRouter);

module.exports = app;