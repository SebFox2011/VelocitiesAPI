const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    mail: {type:String, required:true},
    password: {type:String, required:true},
    bithday: {type:Date, required:true},
    favoriteStations : {type:Array, required:true}

});

module.exports = mongoose.model('User',userSchema);