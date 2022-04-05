const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Database Schema for Pitch

const PitchSchema = new Schema({
    entrepreneur: {
        type: String,
        required: true
    },
    pitchTitle : {
        type: String,
        required: true
    }, 
    pitchIdea : {
        type: String,
        required: true
    },
    askAmount: {
        type: Number,
        required: true,
        min : 0.0
    },   
    equity : {
        type: Number,
        required: true,
        min : 0.0,
        max : 100.0
    }
},
    { versionKey: false }
);



const Pitch = mongoose.model('pitch', PitchSchema);
module.exports = Pitch;
