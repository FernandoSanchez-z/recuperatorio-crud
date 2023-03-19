const express = require('express');

const router = express.Router();

const genresController = require('../controllers/genresController');

const {
    check,
    validationResult,
    body
  } = require('express-validator');

router.get('/', genresController.listGenres);

module.exports = router;
