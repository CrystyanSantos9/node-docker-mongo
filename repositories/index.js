const service = require('../services/db');

const getAll = async ()=>{
    const users = await service.getAll()
    return users 
}

const getDBStatus= async ()=>{
    const status = await service.showTableStatus()
    return status 
}

const insertNewUsers = async (nome, email, cpf, senha)=>{
    const status = await service.insertUsers(nome, email, cpf, senha)
    return status 
}

module.exports = {
    getAll,
    getDBStatus,
    insertNewUsers
}