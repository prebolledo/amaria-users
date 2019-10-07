import server from './server'

//Run server
server(
    //Registra rutas del servicio
    (app) => {
        //Para ingresar a la raiz del api
        app.route('/').get((eq, res, next)=>{
            res.status(200).json({
                message:'Api usuaios'
            })
        })    
    }
)

