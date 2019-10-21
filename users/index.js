import User from './User'

const fetch = require('node-fetch');

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
    let user = await User.findOne({_id:id}).populate('friends')
    user = user ? user.toObject() : null
    return user
}

const create = async (user) => {
    return await User.create(user)
}

const remove = async (id) => {
    const result = await User.deleteMany({_id:id})
    console.log(result)
    return result.deletedCount > 0
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
