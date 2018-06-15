'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;
  router.get('/', 'home.render');
  router.post('/auth/signup', 'auth.signup');
  router.get('/auth/login', 'auth.login');
  router.post('/auth/login', app.passport.authenticate('local', { successRedirect: '/', failureRedirect: '/auth/login' }));
  router.get('/auth/logout', 'auth.logout');
};
