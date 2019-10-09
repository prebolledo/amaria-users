import collection from './collection'
import db from  '../db'

const all = () => {
    db.open()
    return collection
}

const get = (id) => {
    const users = collection.filter(user => user.id == id)
    let user = null
    if(users.length > 0){
        user = users[0]
    }
    return user
}

const create = (user) => {
    user.id = collection.length + 1
    collection.push(user)
    const {id} = user
    return {id}
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