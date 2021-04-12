const Hapi = require('@hapi/hapi');
const env = require('./services/helpers/env')
const swagger  = require('./configs/swagger')
const routes = require('./routes/index')

// console.log(env.port)

const server = async () =>{
    const hapiServer = Hapi.server({
        port: env.port,
        host: env.host 
    })

    await hapiServer.register(swagger)
    hapiServer.route(routes)
    return hapiServer
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

module.exports = server()