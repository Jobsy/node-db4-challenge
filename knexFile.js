
module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './recipe-ingredient.db3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations"
      },
      seeds: {
        directory: "./data/seeds"
      },
      pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        },
      },
    },
  
  
    production: {
      client: 'sqlite3',
      connection: {
        filename: './recipe-ingredient-production.db3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations"
      },
      seeds: {
        directory: "./data/seeds"
      }
    }
  
  };
  