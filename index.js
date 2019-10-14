import server from './server'
import users from './users'

//Run server
server(
    //Registra rutas del servicio
    (app) => {
        
        //Obtener todos los users
        app.get('/',async (req, res, next)=>{
            res.status(200).json(await users.all(req.query))
        })

        app.get('/:id',async (req, res, next)=>{
            const user = await users.get(req.params.id)
            if(user){
                res.status(200).json(user) 
            }else{
                res.status(404).json(user) 
            }
            
        })

        app.delete('/:id',async (req, res, next)=>{
            const result = await users.remove(req.params.id)

            if(result){
                res.status(200).json(result) 
            }else{
                res.status(500).json(result) 
            }
            
        })     

        app.post('/',async (req, res, next)=>{
            res.status(200).json(await users.create(req.body)) 
        }) 
        
        app.put('/:id',async (req, res, next)=>{
            res.status(200).json(await users.update(req.params.id, req.body)) 
        })      
        
        app.put('/:id/activate/',async (req, res, next)=>{
            res.status(200).json(await users.activate(req.params.id)) 
        })        
    }
)