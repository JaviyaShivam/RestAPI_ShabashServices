const express = require('express');
const router = new express.Router();
const User = require('../model/user');
const ServiceProvider = require('../model/serviceProvider');


// Service Provider Oriented
// serviceProvider Registration While Sign UP
router.post('/serviceProvider', async(req, res)=>{
    try{
        const user = new ServiceProvider(req.body);
        const regUser = await user.save();
        res.status(201).send(regUser);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

// Update serviceProvider Details
router.patch('/serviceProvider/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        const updateUser = await ServiceProvider.findByIdAndUpdate(_id, req.body);
        res.status(201).send(updateUser);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

// Get all serviceProvider
router.get('/serviceProvider', async (req, res)=>{
    try{
        const user = await ServiceProvider.find();
        res.status(200).send(user);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }   
});

//Get serviceProvider Details (User Profile)
router.get('/serviceProvider/:id', async (req, res)=>{
    try{
        const _id = req.params.id;
        const user = await ServiceProvider.findById(_id);
        if(!user){
            res.status(404).send("No User Found");
        }else{
            res.status(200).send(user);
        }
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }   
});


// Get Available Electrician
router.get('/availElectrician/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        const user = await User.findById(_id);
        // console.log(user.city);
        const userCity = user.city;
        const serviceProviderAvai = await ServiceProvider.find({$and : [{city: userCity}, {available: true}, {service: "Electrician"}]});
        if(serviceProviderAvai.length === 0){
            res.status(404).send("Electrician is not available in your City")
        }else{
            // console.log(serviceProviderAvai);
            res.status(200).send(serviceProviderAvai);
        }
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

// Get Available Plumber
router.get('/availPlumber/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        const user = await User.findById(_id);
        // console.log(user.city);
        const userCity = user.city;
        const serviceProviderAvai = await ServiceProvider.find({$and : [{city: userCity}, {available: true}, {service: "Plumber"}]});
        if(serviceProviderAvai.length === 0){
            console.log("Plumber is not available in your City");
            res.status(404).send("Plumber is not available in your City")
        }else{
            console.log(serviceProviderAvai);
            res.status(200).send(serviceProviderAvai);
        }
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

// Get Available Carpenter
router.get('/availCarpenter/:id', async(req, res)=>{
    try{
        const _id = req.params.id;
        const user = await User.findById(_id);
        // console.log(user.city);
        const userCity = user.city;
        const serviceProviderAvai = await ServiceProvider.find({$and : [{city: userCity}, {available: true}, {service: "Carpenter"}]});
        if(serviceProviderAvai.length === 0){
            console.log("Carpenter is not available in your City");
            res.status(404).send("Carpenter is not available in your City")
        }else{
            console.log(serviceProviderAvai);
            res.status(200).send(serviceProviderAvai);
        }
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

module.exports = router;