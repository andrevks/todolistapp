//database 
const db = require('./queries');
//path
const path = require('path');
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
app.use(express.static(__dirname + "/todolist"));

app.get('/',(request,response)=>{
    response.sendFile(__dirname + "/todolist/" + "todoList.html");
});

app.get('/users',db.getUsers);
app.get('/tasks',db.getTasks);
app.post('/users',db.createUser);
app.put('/user/:id',db.updateUser);
app.delete('/user/:id',db.deleteUser);