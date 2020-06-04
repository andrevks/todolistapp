const pool = require('./config.js');
//GET 
const getUsers = (request,response) =>{
    pool.query('SELECT * FROM users ORDER BY id ASC',(error,results) =>{
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
    const {name} = request.body;
    
    pool.query('INSERT INTO users(user_name) VALUES($1)',[name],(error,results)=>{
        if(error)throw error;
        response.status(201).json({status: 'sucess',message:'user added'});
    })
}
//DELETE
const deleteUser = (request,response) =>{
    console.log("request.body:",request.body);
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM users WHERE id = $1',[id],(error,results)=>{
        if(error)throw error;
        response.status(200).json({status:'sucess'});
    })
}

// const createTask = (request, response) =>{
//     console.log("request.body:",request.body);
//     const {user_name}
// }
//To access these functions in index.js.Creating
//an object function and module.exports

//UPDATE
const updateUser = (request,response)=>{
    console.log("request.body",request.body);
    const id = parseInt(request.params.id);
    console.log(id);
    const {name} = request.body;

    pool.query('UPDATE users SET user_name = $1 WHERE id = $2',[name,id],
    (error,results) =>{
        if(error) throw error;
        response.status(200).json({status:'sucess',id:id});
    })
}
module.exports ={
    getUsers,
    getTasks,
    createUser,
    updateUser,
    deleteUser
}