import collection from './collection'
import {mongoose, connection} from  '../db'
import userSchema from './userSchema'

const all = async () => {
    const User = await connection.model("User", userSchema, 'users')
    const users = await User.find({})
    return users.lean()
}

const get = async (id) => {
    const User = connection.model("User", userSchema, 'users')
    const user = await User.findOne({_id:id}) //.populate('friends')
    return user ? user.toObject() : null
}

const create = async (user) => {
    const User = await connection.model("User", userSchema, 'users')
    return await User.create(user)
}

const remove = (id) => {
    let i = collection.findIndex((user) => user.id == id)
    return i >= 0 && collection.splice(i,1).length > 0
}

export default {
    all,
    get,
    create,
    remove,
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
