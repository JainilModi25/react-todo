// {
//     title,
//     description,
//     completed
// }

import mongoose from 'mongoose';
import dotenv from 'env';

dotenv.config()

mongoose.connect(process.env.MONGODB_URL)
const todoSchema = mongoose.schema({
    title: String,
    description: String,
    completed: Boolean
})

const todoModel = mongoose.model('todos', todoSchema);
module.exports({
    todo: todoModel
})
