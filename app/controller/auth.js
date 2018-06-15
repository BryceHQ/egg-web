'use strict';

const Controller = require('egg').Controller;
const bcrypt = require('bcryptjs');

class AuthController extends Controller {
  async signup() {
    const ctx = this.ctx;
  }

  async login() {
    const { ctx } = this;
    console.log(bcrypt.hashSync('111'));
    await ctx.render('/auth/login', { csrf: ctx.csrf });
  }

  async logout() {
    const ctx = this.ctx;

    ctx.logout();
    ctx.redirect(ctx.get('referer') || '/');
  }
}

module.exports = AuthController;
