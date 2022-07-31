// const mongoose = require('mongoose');

// var schema = new mongoose.Schema({
//     name : {
//         type : String,
//         required: true
//     },
//     email : {
//         type: String,
//         required: true,
//         unique: true
//     },
//     gender : String,
//     status : String
// })

// const Userdb = mongoose.model('userdb', schema);

// module.exports = Userdb;

const mongoose = require('mongoose');
const schema= mongoose.model('schema',{
    emp_id:{type:String,
        required:true,
        unique:true},
    fname:{type:String,
    required:true},
    lname:{type:String,
    required:true},
    gender:{type:String,
        required:true,},
    dob:{type: String,
        required:true,},
    email:{type:String,
        required:true,
        unique:true},
    aadhaar_id:{type: String,
        required:true,},
    voter_id:{type: String,
        required:true,},
    account_no:{type: String,
        required:true,},
    ifsc_code:{type: String,
        required:true,},
    doj:{type:String,
        required:true,},
    designation:{type:String,
        required:true,},
    joining_loc:{type:String,
        required:true,},
    doex:{type:String},
    lid:{type:String},
    ldes:{type:String},
    ff_stat:{type:String,
        required:true,},
    status:{type:String,
        required:true,},
    
})
module.exports=schema;