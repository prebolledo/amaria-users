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
            const code = user ? 200 : 500
            res.status(code).json(user)            
        })

        app.delete('/:id',async (req, res, next)=>{
            const result = await users.remove(req.params.id)
            const code = result ? 200 : 500
            res.status(code).json(result)
            
        })     

        app.post('/',async (req, res, next)=>{
            res.status(200).json(await users.create(req.body)) 
        }) 
        
        app.put('/:id',async (req, res, next)=>{
            res.status(200).json(await users.update(req.params.id, req.body)) 
        })      
           
    }
)