// {
//     title,
//     description,
//     completed
// }

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

mongoose.connect(process.env.MONGODB_URL)
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

export const todo = mongoose.model('todos', todoSchema);
// module.exports({
//     todo: todoModel
// })
