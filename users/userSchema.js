const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    //_id: String,
    name: String,
    email: String,
    active: Boolean,
    friends:[{ type: Schema.Types.ObjectId, ref: 'User' }]
})

export default userSchema