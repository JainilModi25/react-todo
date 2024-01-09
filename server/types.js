import zod from "zod";

export const createToDo = zod.object({
    title: zod.string(),
    description: zod.string()
})

export const updateToDo = zod.object({
    id: zod.string()
})

// module.exports = {
//     createToDo: createToDo,
//     updateToDo: updateToDo
// }