'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/buffs',
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  // Add more environments here, I'm short on time
};
