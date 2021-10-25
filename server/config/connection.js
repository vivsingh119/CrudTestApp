const development = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || "localhost",
  dialect: "mysql",
};

const testing = {
  database: process.env.TESTING_DB_NAME,
  username: process.env.TESTING_DB_USER,
  password: process.env.TESTING_DB_PASS,
  host: process.env.TESTING_DB_HOST || "localhost",
  dialect: "mysql",
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || "localhost",
  dialect: "mysql",
};

module.exports = {
  development,
  testing,
  production,
};
