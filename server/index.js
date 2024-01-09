import express from 'express';
import { createToDo,updateToDo } from "./types.js"
import { todo } from './db.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

// display a list of all todos
app.get('/todos', async (req, res) => {
    try {const todoList = await todo.find({});
    res.json({
        todoList: todoList
    })
} catch{
    res.status(404).json({
        msg: "No records found."
    })
}

})

// push a new todo
app.post('/todo', async (req, res) => {
    
    try {
        const payload = req.body;   // title and description
        const checkPayload = createToDo.safeParse(payload)
        if (checkPayload){
            await todo.create({
                title: payload.title,
                description: payload.description,
                completed: false
            })
        }

        res.json({
            message: "Todo entry has been inserted in the database."
        })
        
    } catch (error) {
        res.status(411).json({
            message: "Incorrect input format, try again.",
            error: console.log(error)
        })
        return;
    }
    
})

// update a todo and mark it as done
app.put('/completed', async (req, res) =>{
    try {
        const payload = req.body;   // id of the todo
        const checkPayload = updateToDo.safeParse(payload)
        if (checkPayload){
            await todo.update({
                _id: req.body.id,
            },
            {
                completed: true
            })
        }
        
    } catch (error) {
        res.status(411).json({
            message: "Incorrect input format, try again.",
            error: console.log(error)
        })
        return;
    }
    
})


// app.use(err, req, res, next)

app.listen(process.env.PORT, (req, res) => {
    console.log(`App listening on port ${process.env.PORT}`);
})