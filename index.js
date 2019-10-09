import server from './server'
import users from './users'

//Run server
server(
    //Registra rutas del servicio
    (app) => {
        
        //Obtener todos los users
        app.get('/',(req, res, next)=>{
            res.status(200).json(users.all())
        })

        app.get('/:id',(req, res, next)=>{
            const user = users.get(req.params.id)

            if(user){
                res.status(200).json(user) 
            }else{
                res.status(404).json(user) 
            }
            
        })

        app.delete('/:id',(req, res, next)=>{
            const result = users.remove(req.params.id)

            if(result){
                res.status(200).json(result) 
            }else{
                res.status(500).json(result) 
            }
            
        })     

        app.post('/',(req, res, next)=>{
            res.status(200).json(users.create(req.body)) 
        })        
    }
)