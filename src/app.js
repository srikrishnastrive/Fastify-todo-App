const fastifyPlugin = require('fastify-plugin');
const apiRouter = require('./routes/api/apiRouter');
const todoService = require('./services/todoService');
const todoRepository = require('./repository/todoRepository');
const db = require('./db/index');

async function app(fastify,options,done){
    await fastify.register(db);
    await fastify.register(todoRepository);
    await fastify.register(todoService);
    await fastify.register(apiRouter,{prefix:'/api'});
    done();

}

module.exports = fastifyPlugin(app);
