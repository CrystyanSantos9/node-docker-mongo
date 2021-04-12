// const repositories = require('../repositories/index')
const repositories = require('../repositories/index')
const {transformer} = require('../services/helpers/json_format')

const status =  async (request, h)=>{
   const result = await repositories.getAll()
   return result.map(transformer)
}

const dbstatus =  async (request, h)=>{
    const result = await repositories.getDBStatus()
    return result
 }

 const insert =  async (request, h)=>{
     const { nome , email, cpf, senha } = request.payload
    return  await repositories.insertNewUsers(nome, email, cpf, senha)
 }

module.exports =  {
    status,
    dbstatus,
    insert
}