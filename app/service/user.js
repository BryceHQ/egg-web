'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserById(id) {
    const user = await this.app.mysql.get('user', { id });
    return user;
  }

  async getUserByLoginName(login_name) {
    const user = await this.app.mysql.get('user', { login_name });
    return user;
  }

  async getUserByName(name) {
    const user = await this.app.mysql.get('user', { name });
    return user;
  }
}

module.exports = UserService;
