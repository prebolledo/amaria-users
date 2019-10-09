const mongoose = require('mongoose')

let connection = null

const open = async () => {
    if(connection == null){
        console.log('MONGO::CONNECT::INIT')
        await mongoose.connect("mongodb://mongo/training", {
            useNewUrlParser: true,
            useCreateIndex: true,        
            autoReconnect:true,
            useFindAndModify: false,
            
            poolSize: 100,
            socketTimeoutMS: 480000,
            keepAlive: 20,
            connectTimeoutMS: 5000,
            reconnectTries: 30,
            reconnectInterval: 5000,   
        })

        console.log('MONGO::CONNECT::END')
        connection = mongoose.connection 
    }
    return connection
}

export default { mongoose, open }