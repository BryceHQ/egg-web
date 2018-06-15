'use strict';

// had enabled by egg
// exports.static = true;
exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.passportLocal = {
  enable: true,
  package: 'egg-passport-local',
};

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
