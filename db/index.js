const mongoose = require('mongoose')

console.log('MONGO::CONNECT::INIT')
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
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
const connection = mongoose.connection 

mongoose.connection.on('connected', () => console.log('MONGO::CONNECT::END')) 
mongoose.connection.on('error', (err) => console.log('MONGO::CONNECT::ERROR '+ err))
mongoose.connection.on('disconnected',() => console.log('MONGO::DISCONNECT'))
process.on('SIGINT', () =>  
    mongoose.connection.close(() => { 
        console.log('MONGO::DISCONNECT:THROUGH-APP-TERMINATION')
        process.exit(0)
    })
)

export { mongoose, connection }