module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection:{
      host: env("PGHOT", "127.0.0.1"),
      port: env("PGPORT", "5432"),
      database: env("PGDATABASE", "strapi"),
      user: env("PGUSER", "strapi"),
      password: env("PGPASSWORD", "password"),
      ssl: env.bool(true),
    },
    pool: { main: 0 }
  }
})
