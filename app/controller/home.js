'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async render() {
    const ctx = this.ctx;
    if (ctx.isAuthenticated()) {
      ctx.body = 'hello world ' + ctx.user.name;
    } else {
      ctx.body = 'hello world unkown user';
    }
  }
}

module.exports = HomeController;
