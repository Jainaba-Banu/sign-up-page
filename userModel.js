const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    is_admin:{
        type:Number,
        default:0
    },
    is_varified:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model('users',userSchema);