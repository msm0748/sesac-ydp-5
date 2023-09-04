'use strict';

// sequelize 모듈 호출
const { Sequelize, DataTypes } = require('sequelize');

const config = require(__dirname + '/../config/config.json')['development'];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config // {}
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./User')(sequelize, DataTypes);

module.exports = db;
