const Joi = require('joi')
const { status, dbstatus, insert } =require('../controllers/app.controllers')
// const { LoginResponseDTO } = require('../models/dto/auth.dto')
// const Joi = require('joi')
const root = ({
    method: 'GET', 
    path: "/", 
    handler: status,
    options: {
        tags: ['api'], //tenho que ter pelo menos essa tag
        description: 'Listar usuários', 
        notes: 'Pode ser utilizado para ver o status da aplicação',
    }   
})

const database = ({
    method: 'GET', 
    path: "/api/v1/db/status", 
    handler: dbstatus,
    options: {
        tags: ['api','status','database'], //tenho que ter pelo menos essa tag
        description: 'Listar usuários', 
        notes: 'Pode ser utilizado para ver o status da aplicação',
    }   
})

const insertNewUser = ({
    method: 'POST', 
    path: "/api/v1/user/insert", 
    handler: insert,
    options: {
        tags: ['api','user'], //tenho que ter pelo menos essa tag
        description: 'Inserir usuários', 
        notes: 'Pode ser utilizado para ver o status da aplicação',
        validate:{
            payload: Joi.object({
                nome: Joi.string().required(),
                email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
                cpf: Joi.string().required().min(11).max(11),
                senha:Joi.string().required().min(8).max(12)
            }).label('RequestInsertDTO')
        }
    }   
})
 
module.exports = [ root, database, insertNewUser]