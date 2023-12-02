const mongoose = require('mongoose');
const validator = require('validator');

const serviceProviderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: [2, "Please write your valid name"],
    },
    mobile:{
        type: Number,
        required:true,
        unique: true,
        minlength: 10,
    },
    email:{
        type:String,
        required: true,
        unique: [true, "There must be unique Email Id"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please enter valid email Id");
            }
        },
    },
    service:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    available:{
        type: Boolean,
        default: true,
    },
    date:{
        type: Date,
        default:Date.now,
    }
});

const serviceProvider = new mongoose.model('serviceProvider', serviceProviderSchema);

module.exports = serviceProvider;