//Require dotenv
const dotenv = require('dotenv');

//Set up dotenv
dotenv.config();

//Set Object for enviroment paths
const config = {
    env: process.env.NODE_ENV,
    db:{
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        database: process.env.PG_DATABASE,
        username: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        connection_string: process.env.CONNECTION_STRING,
        
    }
}

module.exports = config;