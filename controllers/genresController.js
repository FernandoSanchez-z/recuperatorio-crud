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
            return res.status(200).json({
                requestInfo: {
                    statusCode: 200,
                    total: genres.length
                },
                reponses: genres
            })
        })
        .catch(error => res.send(error))

    }

}

module.exports = genresController;
