const express = require('express');

const router = express.Router();

const songsController = require('../controllers/songsController');

const {
    check,
    validationResult,
    body
  } = require('express-validator');

router.get('/', songsController.listSongs);

router.get('/:id', songsController.song);

router.put('/:id', songsController.updateSong);

router.delete('/:id', songsController.deleteSong);

router.post('/', songsController.createSong);

module.exports = router;
