const Offer = require('../models/offer.model');
const Pitch = require('../models/pitch.model');

// Controller functions for offers

/**
* The function "makeOffer" will create a offer document in offers collection.
*
**/
exports.makeOffer = async (req, res) => {
    try{
        try{
            let exists = await Pitch.findById(req.params.id);
        }catch(err){
            res.status(404).json({"error" : "NOT FOUND"});
        }

        const offer = new Offer({
            pitchId: req.params.id,
            investor: req.body.investor,
            amount : req.body.amount,
            equity : req.body.equity,
            comment : req.body.comment
        });
        let saved = await offer.save();
        res.status(201).json({ id: saved._id });
    }
    catch(err){
        res.status(400).type("txt").send(err.message);    
    }
};