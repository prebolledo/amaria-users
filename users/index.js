import User from './User'

const all = async (params) => {
    const filter = {}
    if(
        typeof(params.active) != 'undefined' 
        && 
        ['true','false'].includes(params.active)
    ){
        filter.active = params.active == 'true'
    }
    
    const users = await User.find(filter).lean()
    return users
}

const get = async (id) => {
    const user = await User.findOne({_id:id}).populate('friends')
    return user ? user.toObject() : null
}

const create = async (user) => {
    return await User.create(user)
}

const remove = async (id) => {
    const result = await User.deleteMany({_id:id})
    return result.deleteCount > 0
}

const update = async (id, data) =>{
    const user = await User.findOneAndUpdate({_id:id},data,{new:true})
    return user
}

const activate = async (id) => {
    const user = await User.findOne({_id:id})
    user.active = true
    return await user.save() != null
}

export default {
    all,
    get,
    create,
    remove,
    update,
    activate,
}

//findOneAndUpdate(filter, update,[{new:true /*return doc updated*/,upsert: true /*si no existe lo crea*/}])
//updateOne
// findOne(filter) and doc.save()
//create(obj)
//deleteMany(filter)
//find(filter)
//populate('attr')
//attr: { type: Number, default: 0 }
//attr: { type: Number, index:true }
//createAt: { type: Date, default: Date.now }
