const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/ShabashServices",{
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection is successful...");
}).catch((err)=>{
    console.log(err);
});