const express = require('express');
const router = new express.Router();
const User = require('../model/user');
const ServiceProvider = require('../model/serviceProvider');
// const userId = "";

// User Oriented
// User Registration While Sign UP
router.post('/user', async(req, res)=>{
    try{
        const user = new User(req.body);
        const regUser = await user.save();
        res.status(201).send(regUser);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

// Update User Details
router.patch('/user/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        // userId = _id;
        const updateUser = await User.findByIdAndUpdate(_id, req.body);
        res.status(201).send(updateUser);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

// Get all users
router.get('/user', async (req, res)=>{
    try{
        const user = await User.find();
        res.status(200).send(user);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }   
});

//Get User Details (User Profile)
router.get('/user/:id', async (req, res)=>{
    try{
        const _id = req.params.id;
        const user = await User.findById(_id);
        if(!user){
            res.status(500).send("No User Found");
        }else{
            res.status(200).send(user);
        }
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }   
});

module.exports = router;