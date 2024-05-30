
const fastifyPlugin = require('fastify-plugin');

class TodoRepository{
    constructor(db){
        this.db = db;
    }
    async getAll(){
        return this.db.todos;
    }
    async create(todoText){
        const todoList = this.db.todos;
        this.db.todos.push({
            text:todoText,
            id:todoList.length
        })
        return this.db.todos;
    }
    async getOne(id){
        const todo = this.db.todos.find(todo => todo.id === id);
        return todo;
    }
    async deleteOne(id){
        const deletetodo = this.db.todos.remove(id);
        return deletetodo;

    }
    async deleteAll(){
        const deleteAllTodos = this.db.todos.removeAll();

    }
}

async function todoRepository(fastify,options) {
    const {db} = fastify;
    const repo = new TodoRepository(db);
    fastify.decorate('todoRepository',repo);

}


module.exports = fastifyPlugin(todoRepository);