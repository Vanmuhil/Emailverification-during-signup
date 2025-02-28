const mongoose = require('mongoose')
const Authschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    activationcode:{
        type:String,
        required:true,
        default:null
    },
    isActivated:{
        type:Boolean,
        required:true,
        default:false
    }

})

const Authmodel=mongoose.model('users',Authschema)
module.exports=Authmodel