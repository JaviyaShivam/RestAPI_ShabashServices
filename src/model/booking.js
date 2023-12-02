
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId:{
        type: String,
        required:true,
    },
    spId:{
        type: String,
        required:true,
    },
    detail:{
        type: String,
        required: true,
    },
    bookingDate:{
        type: Date,
        default: Date.now
    }
});

const bookingModel = new mongoose.model('Booking', bookingSchema);

module.exports = bookingModel;