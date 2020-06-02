//database 
const db = require('./queries');
//Entry point to the server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


//Basically extract the entire body portion
//of an incoming request and exposes it on req.body.
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.listen(port, () =>{
    console.log(`App running on port ${port}`);
});

//Connect with the node-postgress to create a pool of connections

app.get('/',(request,response)=>{
    response.json({info: 'First TodoListApp with NodeJS, Express and Postgres API'})
});

app.get('/users',db.getUsers);
app.get('/tasks',db.getTasks);
app.post('/users',db.createUser);