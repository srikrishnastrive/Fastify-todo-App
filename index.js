const fastify = require('fastify')({logger:true,

});


/** 
fastify.addHook('onReady',function listener(done){
    console.log(`Server is ready to take requests`);
    done();
});

fastify.addHook('onClose',function listener(done){
    console.log(`server is stopping`);
})
*/

fastify.post('/ping',(req,res)=>{
    console.log(req);
    return "pong"

})



//if we don't call done call back it will stop the next step after login the plugin
function samplePlugin(fastify,options,done){
    console.log("executing my plugin");
    fastify.decorate("key","value");
    console.log(fastify);
    done();
}

fastify.register(samplePlugin);

//fastify routes

fastify.route({
    url:'/hello',
    method:"POST",
    handler: function (req,res){
        console.log(req.body);
        console.log(fastify);
        return "world"; 
    }
})


const PORT = 8080;
async function start(){
   try {
    // fastify.log.debug(`Server is up on PORT:${PORT}`);
        await fastify.listen({port:PORT});
        console.log(`Server is up on PORT:${PORT}`);
        // fastify.close();
   }catch (error) {
        console.log(error);
   }

}

start();