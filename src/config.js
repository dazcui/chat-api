//* dependencias
require("dotenv").config();

const config = {
  port: process.env.PORT || 9000,
  nodeEnv: process.env.NODE_ENV || "development", //* desarrollo, testing, producción
  jwtSecret: process.env.JWT_SECRET,
  db: {
    port: process.env.DB_PORT || 5432,
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "27327207Ja",
    dbName: process.env.DB_NAME,
  },
};

module.exports = config;
