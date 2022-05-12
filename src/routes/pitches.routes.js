const express = require('express');
const router = express.Router();
const { getPitches, getOnePitch, addPitch } = require('../controllers/pitches.controllers');
const { makeOffer } = require('../controllers/offers.controllers');


/**
 * @route     GET /pitches
 * @desc      Get all pitches
 * @access    Private
 */
router.get('/', getPitches);


/**
 * @route     GET /pitches/<pitch_id>
 * @desc      Get a pitch specific to id
 * @access    Public
 */
router.get('/:id', getOnePitch);


/**
 * @route     POST /pitches
 * @desc      Add a pitch
 * @access    Public
 */
router.post('/', addPitch);


/**
 * @route     POST /pitches/<pitch_id>/makeOffer
 * @desc      Make offer to a pitch
 * @access    Public
 */
router.post('/:id/makeOffer', makeOffer);


module.exports = router;