const mongoose = require('mongoose');

const villeSchema = mongoose.Schema({
    name:{type:String, required:true}

});

module.exports = mongoose.model('Ville',villeSchema);