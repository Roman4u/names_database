// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: 
   process.env.DATABASE_URL ||
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:5432/names`,
  searchPath: "public",
  migrations: {
      directory: "./migrations",
  },
  seeding: {
      directory: './seeds',
  },
};


