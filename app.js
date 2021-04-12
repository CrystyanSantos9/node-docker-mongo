const server = require('./server')
const env=require('./services/helpers/env')

server.then(hapi => {
  console.log('Server running on %s', hapi.info.uri)
//   console.log(`Servidor iniciando em http://${env.host} e na porta ${env.port}`)
  hapi.start()
})