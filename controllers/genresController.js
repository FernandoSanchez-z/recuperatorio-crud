const db = require ('../database/models');

const {
    check,
    validationResult,
    body
} = require('express-validator');

const genresController = {

    listGenres: (req, res) => {

        db.Genre.findAll()
        .then(genres => {
            return res.send({genres, longitud: songs.length})
        })
        .catch(error => res.send(error))

    }

}

module.exports = genresController;
