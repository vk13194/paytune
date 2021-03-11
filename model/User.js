var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    gender: {
        type:String
    },
    age: {
        type:String
    },
    city: {
        type:String
    },
    product: {
        type:String
    },
    
});

module.exports = mongoose.model("User", UserSchema);