const Sequelize = require('sequelize');
const dbConfig = require("../config/db.config.js");
const env = process.env.NODE_ENV || "development";
const dbSettings = dbConfig[env];
db.follower = require('./follower.model')(sequelize, Sequelize);
db.role = require('./role.model')(sequelize, Sequelize);
db.tweet = require('./tweet.model')(sequelize, Sequelize);
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.ROLES = ["user", "premium_user"];
db.user.hasMany(db.tweet);
db.user.belongsToMany(db.follower, {
    through: "followers",
    foreignKey: "followerId",
    otherKey: "followingId"
});
db.user.belongsToMany(db.following, {
    through: "following",
    foreignKey: "followingId",
    otherKey: "followerId"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User.js")(sequelize, Sequelize);

module.exports = db;