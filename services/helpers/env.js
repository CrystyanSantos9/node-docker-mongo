require('dotenv/config')

// console.log(process.env.NODE_ENV)

// console.log(process.env.NODE_ENV)


class Env{
    constructor(){
        this.port = process.env.NODE_ENV=== 'development' ? process.env.DEV_PORT: process.env.PORT
        this.host = process.env.NODE_ENV=== 'development' ? process.env.DEV_HOST : process.env.HOST
    }

    //Iniciar classe
    static initEnv(){
        const enviroment = new Env()
        return enviroment
    }
}



module.exports = Env.initEnv()

