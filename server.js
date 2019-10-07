import express from 'express'
import bodyParser from 'body-parser'

const server = (setRoutes) => {

    const app = express()

    //Middleware: usar compresion
    app.use(require('compression')({filter: () => true }))

    //Middleware: soporte para parseo de application/json en la data enviada por post
    app.use(bodyParser.json())

    //Middleware: soporte para parseo de application/x-www-form-urlencoded en la data enviada por post
    app.use(bodyParser.urlencoded({ extended: true }))
    
    //Devuelve el enrutador que se usara para definir los get/post/put/delete etc
    let router = express.Router()

    //Set routes
    setRoutes(app)

    //Ruta alive para testear el servicio
    app.use('/alive', (req, res, next) => {
        res.status(200).json({OK:true,hi:'hi'})
    })    

    //Puerto
    app.set('port', 4000)
    
    //Host
    app.set('host', 'localhost')
    
    //Inicializa el server
    app.listen(4000, 'localhost');
    
    console.log('server ok')
}

export default server