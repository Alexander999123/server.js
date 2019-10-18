const express = require('express')
const app = express()

const filmsRoutes = require('./api/routes/films');

app.use('/films', filmsRoutes)

module.exports = app;

