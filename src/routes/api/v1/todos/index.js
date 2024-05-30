const { getAllTodos, createTodo,getTodoById,deleteTodoById,deleteAllTodo} = require("../../../../controllers/todoController");

async function todoRouter(fastify,options){
    fastify.get('/',getAllTodos);
    fastify.post('/create',createTodo);
    fastify.get('/:id',getTodoById);
    fastify.delete('/:id',deleteTodoById);
    fastify.delete('/deleteAll',deleteAllTodo);
    
}

    

module.exports = todoRouter;