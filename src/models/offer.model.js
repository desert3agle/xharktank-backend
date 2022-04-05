const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Database Schema for Pitch

const OfferSchema = new Schema({
    pitchId: {
        type: Schema.Types.ObjectID,
        ref: "Pitch",
        required: true,
        description: "ID of the pitch, which got the offer"
      },
    investor: {
        type: String,
        required: true
    },
    amount : {
        type: Number,
        required: true,
        min : 0.0
    }, 
    equity : {
        type: Number,
        required: true,
        min : 0.0,
        max : 100.0
    },
    comment: {
        type: String,
        required: true
    }  
},
    { versionKey: false }
);

const Offer = mongoose.model('offer', OfferSchema);
module.exports = Offer;
