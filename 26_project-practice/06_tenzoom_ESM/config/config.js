import 'dotenv/config.js';

const DB_ENV = process.env.DB_ENV;

const config = {
  local: {
    username: process.env.LOCAL_RDB_USERNAME,
    password: process.env.LOCAL_RDB_PASSWORD,
    database: process.env.LOCAL_RDB_DATABASE,
    host: process.env.LOCAL_RDB_HOST,
    dialect: 'mysql',
  },
  develop: {
    username: process.env.RDB_USERNAME,
    password: process.env.RDB_PASSWORD,
    database: process.env.RDB_DATABASE,
    host: process.env.RDB_HOST,
    dialect: 'mysql',
  },
};

export default config[DB_ENV];
