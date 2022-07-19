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
        required:true,
        unique:true},
    fname:{type:String,
    required:true},
    lname:{type:String,
    required:true},
    gender:{type:String},
    dob:{type: String},
    email:{type:String,
        required:true,
        unique:true},
    aadhaar_id:{type: String},
    voter_id:{type: String},
    account_no:{type: String},
    ifsc_code:{type: String},
    doj:{type:String},
    designation:{type:String},
    joining_loc:{type:String},
    doex:{type:String},
    lid:{type:String},
    ldes:{type:String},
    ff_stat:{type:String},
    status:{type:String},
    
})
module.exports=schema;