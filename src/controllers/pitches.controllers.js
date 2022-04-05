const Pitch = require('../models/pitch.model');
const ObjectId = require('mongodb').ObjectId;

// Controller functions for pitches

/**
* The function "getAll" will get all the pitches from database ,
* Perform outer join on "pitches" and "offers" collections and
* Format it according to client specs.
**/
exports.getAll = async (req, res) => {
    try{    
        let pitches = await Pitch.aggregate([
            {     
                $lookup: {
                    from: "offers",
                    localField: "_id",
                    foreignField: "pitchId",
                    as: "offers",
                },
            },
            {
                $project: {
                    id:"$_id",
                    _id: 0,
                    entrepreneur: 1,
                    pitchTitle: 1,
                    pitchIdea: 1,
                    askAmount: 1,
                    equity: 1,
                    offers : {
                        id:"$_id",
                        investor: 1,
                        amount : 1,
                        equity : 1,
                        comment : 1,
                    },
                },
            },
        ]).sort({id: -1});
        res.status(200).json(pitches);
    }catch(err){
        res.status(500).type("txt").send(err.message);
    }
};


/**
* The function "getById" will get specific pitch from database by id,
* Format it according to client specs.
**/
exports.getById = async (req, res) => {
    try{
        let pitch = await Pitch.aggregate([
            {
                $match: {
                    _id: ObjectId(req.params.id),
                },
            },
            {
                $lookup: {
                    from: "offers",
                    localField: "_id",
                    foreignField: "pitchId",
                    as : "offers",
                },
            },
            {
                $project: {
                    id:"$_id",
                    _id: 0,
                    entrepreneur: 1,
                    pitchTitle: 1,
                    pitchIdea: 1,
                    askAmount: 1,
                    equity: 1,
                    offers : {
                        id:"$_id",
                        investor: 1,
                        amount : 1,
                        equity : 1,
                        comment : 1,
                    },
                },
            },
        ]);
        res.status(200).json(pitch[0]);
    }catch(err){
        res.status(404).json({"error" : "NOT FOUND"});
    }
};

/**
* The function "create" will create a pitch document in pitches collection.
*
**/
exports.create = async (req, res) => {
    try{
        const pitch = new Pitch({
            entrepreneur: req.body.entrepreneur,
            pitchTitle: req.body.pitchTitle,
            pitchIdea: req.body.pitchIdea,
            askAmount: req.body.askAmount,
            equity: req.body.equity

        });
        let saved = await pitch.save();
        res.status(201).json({ id: saved._id });
    }catch(err){
        res.status(400).type("txt").send(err.message);
    }
};


