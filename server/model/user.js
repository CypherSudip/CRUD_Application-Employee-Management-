const mongoose = require('mongoose');
const user= mongoose.model('user',{
    id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String,
    email:String,
    usertype:String
})
module.exports=user;