
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
        console.log(this.db.todos);
        const todo = this.db.todos.find(todo => todo.id == id);
        return todo;
    }
    async deleteOne(id) {
       
        const index = this.db.todos.findIndex(todo => todo.id == id);
        if (index !== -1) {
           
            const deletedTodo = this.db.todos.splice(index, 1);
            return deletedTodo[0];
        } else {
            return null;
        }
    }
    
    async deleteAll() {
        const deleteAllTodos = this.db.todos.splice(0, this.db.todos.length);
        return deleteAllTodos;
    }
}

async function todoRepository(fastify,options) {
    const {db} = fastify;
    const repo = new TodoRepository(db);
    fastify.decorate('todoRepository',repo);

}


module.exports = fastifyPlugin(todoRepository);