const express=require("express");
const app=express();
const cors=require('cors');
const pool=require('./db');

app.use(cors());
app.use(express.json());


//ROUTES

//Create a todo
app.post('/todos',async (req,res)=>{
    try {
        const {name,description, todo_date}=req.body;
       const newTodo=await pool.query('INSERT INTO todo (name , description, todo_date) VALUES($1 , $2, $3) RETURNING *',[name , description, todo_date]) 
    // console.log(newTodo)
       res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message) 
    }
})

//Get all todo
app.get('/todos',async (req,res)=>{
    try {
      const allTodos=await pool.query('SELECT * FROM todo');
        res.json(allTodos.rows)
        
    } catch (err) {
        console.error(err.message)
    }
})

//Get a Todo

app.get('/todos/:id',async (req,res)=>{
    // console.log(req.params)
    const {id}=req.params;
    const todo=await pool.query('SELECT * FROM todo WHERE (todo_id)=$1',[id]);
    res.json(todo.rows[0])
})



//Update a todo
app.put('/todos/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const {name, description, todo_date}=req.body;
        const updatedTodo=await pool.query("UPDATE todo SET name=$1,description=$2, todo_date=$3 WHERE todo_id=$4",[name,description,todo_date,id]);    
        res.json("todo updated successfully!!!! Hurray!")
    } catch (err) {
        console.error(err.message)
    }
    
})


//Delete a todo

app.delete('/todos/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const deletedTodo=await pool.query("DELETE FROM todo WHERE todo_id=$1",[id]);
        res.json("Todo deleted successfully");
        
    } catch (err) {
        console.error(err.message)
    }
});



app.listen(5000,()=>{
    console.log('server is listening to port 5000')
});