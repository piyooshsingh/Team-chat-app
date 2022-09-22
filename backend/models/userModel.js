const {Schema, model} = require('../connection');


const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    age : Number
})

// name of collection
module.exports=model('users', mySchema);