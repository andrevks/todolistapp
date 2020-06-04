//Creating a pool of connections with node-postgres
const Pool = require('pg').Pool;
//Requirig environment variables
require('dotenv').config();

//In Heroku NODE_ENV will be set to production,
//so you can have different behavior between env.
const isProduction = process.env.NODE_ENV === 'production';

//postgresql://USER:PASSWORD@HOST:PORT/DATABASE
const connectionString = 
`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@
${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

//HEROKU will suply with a string DATABASE_URL
const pool = new Pool({
    connectionString: isProduction? process.env.DATABASE_URL:
    connectionString,
    ssl: isProduction
})
//const pool = new Pool({
    //user:'andrew',
    //host:'127.0.0.1',
    //database:'todolist_database',
    //password: 'password123',
    //port: 5432
//});

module.exports = {pool}