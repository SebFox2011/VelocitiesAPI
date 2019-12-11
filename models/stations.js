const mongoose = require('mongoose');

const stationSchema = mongoose.Schema({
    idStation: {type:Number, required:true},
    idVille: {type:Number,required:true},
    name: {type:String, required:true},
    bikesAvailable: {type:Number, required:true},
    slotsAvailable: {type:Number, required:true},
    state: {type:String, required:true},
    location: {type: pointSchema,required: true}
});

module.exports = mongoose.model('Station',stationSchema);