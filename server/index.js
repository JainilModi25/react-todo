import express from 'express';
import mongoose from 'mongoose';
import {createToDo, updateToDo} from '/types.js'   // object destructuring

const app = express()
app.use(express.json())

// display a list of all todos
app.get('/todos', (req, res) => {

})

// push a new todo
app.post('/todo', (req, res) => {
    
    try {
        const payload = req.body;
        const checkPayload = createToDo.safeParse(payload)
        if (checkPayload){
            
        }
        // push it in mongodb
        
    } catch (error) {
        res.status(411).json({
            message: "Incorrect input format, try again.",
            error: console.log(error)
        })
        return;
    }

})

// update a todo and mark it as done
app.put('/completed', (req, res) =>{

})


app.use(err, req, res, next)