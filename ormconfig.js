console.log('process.env.DATABASEE_URL :>> ', process.env.DATABASE_URL);
module.exports = {
  type: 'postgres',
  url: process.env.HEROKU_POSTGRESQL_AQUA_URL,
  entities: ['dist/models/**/*.js'],
  migrations: ['dist/database/migrations/**/*.js'],
  cli: {
    migrationsDir: ['src/database/migrations/'],
    entitiesDir: 'src/models',
  },
  extra: { ssl: true, rejectUnauthorized: false },
};
