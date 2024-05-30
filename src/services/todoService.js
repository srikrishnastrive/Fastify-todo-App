const fastifyPlugin = require('fastify-plugin');

class TodoService {
    constructor(todoRepostitory){
        return this.todoRepostitory = todoRepostitory;
    }

    async getAll(){
        return this.todoRepostitory.getAll();
    }

    async create(todoText){
        return this.todoRepostitory.create(todoText);
    }

    async getOne(id){
        return this.todoRepostitory.getOne(id);
    }

    async deleteOne(id){
        return this.todoRepostitory.deleteOne(id);
    }

    async deleteAll(){
        return this.todoRepostitory.deleteAll();
    }
}

async function todoService(fastify,options){
    const {todoRepository} = fastify;
    const service = new TodoService(todoRepository);
    fastify.decorate('todoService',service);
}

module.exports = fastifyPlugin(todoService);