const mysql = require('mysql')
const config = require('../configs/db_options')
const fs = require('fs')



// console.log(getAll())
const getAll =  () =>{
    return new Promise((resolve, reject)=>{
        const connection = mysql.createConnection(config.options)
        connection.connect(err => {
            if (err) {
              console.error('An error occurred while connecting to the DB')
              throw err
            }
          })

            connection.query('SELECT * FROM usuarios', (err, result, fields)=>{
               if(err) return reject(err)
                    resolve(result)
                    // connection.end() 
                    // console.log(result)
                    connection.end();
            })
        })        
}

const showTableStatus = ()=>{
    return new Promise((resolve, reject)=>{
        const connection = mysql.createConnection(config.options)
        connection.connect(err => {
            if (err) {
              console.error('An error occurred while connecting to the DB')
              throw err
            }
          })
        connection.query('SHOW TABLE STATUS', (err, result, fields)=>{
            if(err) return reject(err)
            resolve(result)
            connection.end();
        })
    })
}




const insertUsers = (nome, email, cpf, senha)=>{
    return new Promise((resolve, reject)=>{
        const connection = mysql.createConnection(config.options)
        connection.connect(err => {
            if (err) {
              console.error('An error occurred while connecting to the DB')
              throw err
            }
          })
        connection.query(`INSERT INTO usuarios (nome, email, cpf,senha) VALUES ("${nome}", "${email}","${cpf}","${senha}");`, (err, result, fields)=>{
            if(err){
                console.log(err.sqlMessage)
                connection.end();
                return reject(err)
                
            } 
            resolve(result)
            connection.end();
       })
})
}


// const logbd =  () => {
//     showTableStatus().then(data=>{
//         new Promise((reject, resolve)=>{
//             const logs = data.toString()
//             // console.log(typeof(logs))
//             fs.writeFile('log.tx', `${logs}` , err =>{
//                 if(err) throw err;
//             })
//     })
//     })
// }
// logbd()



    


module.exports = {
    getAll,
    showTableStatus,
    insertUsers
}