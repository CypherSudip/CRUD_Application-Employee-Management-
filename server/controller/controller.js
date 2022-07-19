// var Userdb = require('../model/model');

// // create and save new user
// exports.create = (req,res)=>{
//     // validate request
//     if(!req.body){
//         res.status(400).send({ message : "Content can not be emtpy!"});
//         return;
//     }

//     // new user
//     const user = new Userdb({
//         name : req.body.name,
//         email : req.body.email,
//         gender: req.body.gender,
//         status : req.body.status
//     })

//     // save user in the database
//     user
//         .save(user)
//         .then(data => {
//             //res.send(data)
//             res.redirect('/add-user');
//         })
//         .catch(err =>{
//             res.status(500).send({
//                 message : err.message || "Some error occurred while creating a create operation"
//             });
//         });

// }

// // retrieve and return all users/ retrive and return a single user
// exports.find = (req, res)=>{

//     if(req.query.id){
//         const id = req.query.id;

//         Userdb.findById(id)
//             .then(data =>{
//                 if(!data){
//                     res.status(404).send({ message : "Not found user with id "+ id})
//                 }else{
//                     res.send(data)
//                 }
//             })
//             .catch(err =>{
//                 res.status(500).send({ message: "Erro retrieving user with id " + id})
//             })

//     }else{
//         Userdb.find()
//             .then(user => {
//                 res.send(user)
//             })
//             .catch(err => {
//                 res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
//             })
//     }

    
// }

// // Update a new idetified user by user id
// exports.update = (req, res)=>{
//     if(!req.body){
//         return res
//             .status(400)
//             .send({ message : "Data to update can not be empty"})
//     }

//     const id = req.params.id;
//     Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
//         .then(data => {
//             if(!data){
//                 res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
//             }else{
//                 res.send(data)
//             }
//         })
//         .catch(err =>{
//             res.status(500).send({ message : "Error Update user information"})
//         })
// }

// // Delete a user with specified user id in the request
// exports.delete = (req, res)=>{
//     const id = req.params.id;

//     Userdb.findByIdAndDelete(id)
//         .then(data => {
//             if(!data){
//                 res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
//             }else{
//                 res.send({
//                     message : "User was deleted successfully!"
//                 })
//             }
//         })
//         .catch(err =>{
//             res.status(500).send({
//                 message: "Could not delete User with id=" + id
//             });
//         });
// }


const schema = require("../model/model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }

  let emp = new schema({
    emp_id: req.body.emp_id,
    fname:req.body.fname,
    lname:req.body.lname,
    gender:req.body.gender,
    dob:req.body.dob,
    email:req.body.email,
    aadhaar_id:req.body.aadhaar_id,
    voter_id:req.body.voter_id,
    account_no:req.body.account_no,
    ifsc_code:req.body.ifsc_code,
    doj:req.body.doj,
    designation:req.body.designation,
    joining_loc:req.body.joining_loc,
    doex:req.body.doex,
    lid:req.body.lid,
    ldes:req.body.ldes,
    ff_stat:req.body.ff_stat,
    status:req.body.status,
  });
  emp.save((err, doc) => {
    if (err) {
      console.log("error in post data " + err);
    } else {
      // res.send(doc);
      res.redirect("/add-user");
    }
  });
};

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    schema.findById(id, (err, doc) => {
      if (!doc) {
        res.status(404).send({ message: `Not found user with id ${id}` });
      } else if (err) {
        res.status(500).send({ message: `Error getting user with id ${id}` });
      } else {
        res.send(doc);
      }
    });
  } else {
    schema.find((err, doc) => {
      if (err) {
        console.log("error in GET data " + err);
      } else {
        res.send(doc);
      }
    });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "data to update can not be empty" });
    return;
  }
  const id = req.params.id;
  schema.findByIdAndUpdate(id, req.body,(err, doc) => {
    if (!doc) {
      res.status(400).send({ message: `Cannot update user with ${id}` });
    } else if (err) {
      console.log("error in PUT employee by id " + err);
    } else {
      res.send(doc);
      
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  schema.findByIdAndDelete(id, (err, doc) => {
    if (!doc) {
      res.status(404).send({ message: `Cannot delete with id ${id}` });
    } else if (err) {
      res.status(500).send({ message: "Could not delete user" });
    } else {
      res.send({ message: "User deleted successfully" });
    }
  });
}
