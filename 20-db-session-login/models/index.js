'use strict';

// sequelize 모듈 호출
const { Sequelize, DataTypes } = require('sequelize');

const dbConfig = require('../config/db');

const db = {};

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig // {}
);

db.sequelize = sequelize;

db.User = require('./User')(sequelize, DataTypes);

module.exports = db;
