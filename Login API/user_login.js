const express = require('express');
const user=require('../server/model/user');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

router.post('/login',(req,res,next)=>{
    user.find({username:req.body.username})
    .exec()
    .then(user=>{
        if(user.length < 1){
            return res.status(401).send({message: 'user not found'})
        }
        bcrypt.compare(req.body.password,user[0].password,(res,err)=>{
            if(!res){
                return res.status(401).send({message:'Password matching failed'});
            }
            if(res){
                const token= jwt.sign({
                    username:user[0].username,
                    usertype:user[0].usertype,
                    email:user[0].email,
                },
                "this is dummy text",
                {expiresIn:"24h"}
                );
                res.status(200).send({
                    username:user[0].username,
                    usertype:user[0].usertype,
                    email:user[0].email,
                    token:token
                })

            }

        })
        

        
    })
    .catch(err=>{
        res.status(500).status({message:'error occured'});
    })
})

