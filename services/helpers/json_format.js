const transformer = users =>({
    type: 'users',
    id: users.id,
    attributes:{
        name: users.name, 
        identity:users.cpf,
        password: users.senha,
        created_at: users.data_criacao
    },
    links: {
        self: `/api/v1/users`
    }
})

module.exports = {
    transformer
}