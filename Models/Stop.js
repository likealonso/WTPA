var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var stopSchema = new Schema({
    name: String,
    location: String,
    yelpUrl: String,
    imageUrl: String,
    rating: Number,
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Stop", stopSchema);