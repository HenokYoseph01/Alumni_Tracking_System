//Require pg
const {Pool} = require('pg');

//Require configs
const config = require('../config')

//Set up pg
const pool = new Pool({
    user: config.db.username,
    password: config.db.password,
    database: config.db.database,
    connectionString: config.db.connection_string
})

//Handle all connecton events
pool.on("connect", () => {
    console.log(`DB connected`);
  });
  
  pool.on("acquire", () => {
    console.log(`Client checked out from pool`);
  });
  
  pool.on("remove", () => {
    console.log("Client is removed and closed from the pool");
  });
  
  pool.on("error", (err) => {
    console.log("ERROR");
    console.log(err);
  });
  
  // Export pool
  module.exports = pool;