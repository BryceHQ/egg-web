'use strict';

const bcrypt = require('bcryptjs');

exports.bcompare = (str, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(str, hash, (err, res) => {
      if (err) reject(err);
      resolve(res);
      // res === true
    });
  });
};
