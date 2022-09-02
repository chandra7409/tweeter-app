module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Asus@7409", // update the db password here
    DB: "db_name", //add database name here
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};