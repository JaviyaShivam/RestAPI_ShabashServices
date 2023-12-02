const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invelid Email Id...");
            }
        },
        required: true,
        unique: [true, "Email id must be unique"],
    },
    mobile:{
        type: Number,
        required: true,
        min: 10,
        unique: true,
    },
    city:{
        type: String,
        required: true,
    }
});

const userProfile = new mongoose.model('userProfile', userSchema);

module.exports = userProfile;