//Creating a pool of connections with node-postgres
const Pool = require('pg').Pool;
const pool = new Pool({
    user:'andrew',
    host:'127.0.0.1',
    database:'todolist_database',
    password: 'password123',
    port: 5432
});

//GET 
const getUsers = (request,response) =>{
    pool.query('SELECT * FROM users',(error,results) =>{
        if(error)throw error;
        response.status(200).json(results.rows);
    });
}
const getTasks = (request,response) =>{
    pool.query('SELECT * FROM tasks',(error,results)=>{
        if(error)throw error;
        response.status(200).json(results.rows);
    })
}

//INSERT
const createUser = (request, response) =>{
    console.log("request.body:",request.body);
    const {user_name} = request.body;
    
    pool.query('INSERT INTO users(user_name) VALUES($1)',[user_name],(error,results)=>{
        if(error)throw error;
        response.status(201).send(`User added with ID: ${results.insertId}`);
    })
}
//To access these functions in index.js.Creating
//an object function and module.exports
module.exports ={
    getUsers,
    getTasks,
    createUser
}