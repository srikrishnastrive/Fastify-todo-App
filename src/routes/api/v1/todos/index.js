const { getAllTodos, createTodo,getTodoById } = require("../../../../controllers/todoController");

async function todoRouter(fastify,options){
    fastify.get('/',getAllTodos);
    fastify.post('/create',createTodo);
    fastify.get('/:id',getTodoById);
    
}

    

module.exports = todoRouter;