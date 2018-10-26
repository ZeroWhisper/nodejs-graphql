const express = require('express');
const routes = express.Router();

const authController = require('./controllers/authController');

routes.get('/', (req, res, next) => {
  return res.redirect('/auth/signin');
})

/**
 * Authenticate
 */
routes.get('/auth/signup', authController.signup);
routes.get('/auth/signin', authController.signin);
routes.post('/auth/register', authController.register);
routes.post('/auth/authenticate', authController.authenticate);

/**
 * Dashboard
 */
routes.get('/app/dashboard', (req, res, next) => {
  res.send('Olá!');
});


module.exports = routes;