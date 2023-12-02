const express = require('express');
const router = new express.Router();
const Booking = require('../model/booking');
const ServiceProvider = require('../model/serviceProvider');
const User = require('../model/user');

// Post Request for Book Service Provider
router.post('/bookService/:id/:idsp/:detail', async(req, res)=>{
    try{
        const userId = req.params.id;
        const spId = req.params.idsp;
        const detail = req.params.detail;
        const bookSp = new Booking({
            userId : userId,
            spId : spId,
            detail: detail,
        });
        const saveBooking = await bookSp.save();
        console.log(saveBooking);
        if(saveBooking.length != 0){
            const sp = ServiceProvider.findByIdAndUpdate( spId, {available: false}, {new: true});
            console.log(`Service Provider's Details: ${sp}`);
        }
        res.status(201).send(saveBooking);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

// Get Request for Book Service Provider
router.get('/bookService/:id', async(req, res)=>{
    try{
        const userId = req.params.id;
        const bookings = await Booking.find({userId: userId});
        console.log(bookings);
        res.status(200).send(bookings);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

module.exports = router;