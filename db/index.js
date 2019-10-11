const mongoose = require('mongoose')

const open = async () => {
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
}

open()

const connection = mongoose.connection 

export { mongoose, connection }