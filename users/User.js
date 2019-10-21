import {mongoose, connection} from  '../db'

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: String,
    address: String,
    active: { type: Boolean, default: true },
    createAt: { type: Date, default: Date.now },
})

const User = connection.model("User", userSchema, 'users')
export default User