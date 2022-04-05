const express = require('express');
const router = express.Router();
const pitches = require('../controllers/pitches.controllers');
const offers = require('../controllers/offers.controllers');


/**
 * @route     GET /pitches
 * @desc      Get all pitches
 * @access    Private
 */
router.get('/', (req, res) => {
    pitches.getAll(req,res);
});


/**
 * @route     GET /pitches/<pitch_id>
 * @desc      Get a pitch specific to id
 * @access    Public
 */
router.get('/:id', (req, res) => {
    pitches.getById(req, res);
});


/**
 * @route     POST /pitches
 * @desc      Add a pitch
 * @access    Public
 */
router.post('/', (req, res) => {
    pitches.create(req, res);
});


/**
 * @route     POST /pitches/<pitch_id>/makeOffer
 * @desc      Make offer to a pitch
 * @access    Public
 */
router.post('/:id/makeOffer', (req, res) => {
    offers.makeOffer(req, res);
});


module.exports = router;