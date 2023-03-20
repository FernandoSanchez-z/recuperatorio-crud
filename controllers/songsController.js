const db = require ('../database/models');

const {
    check,
    validationResult,
    body
} = require('express-validator');

const songsController = {

    listSongs: (req, res) => {

        db.Song.findAll()
        .then(songs => {
            return res.status(200).json({
                requestInfo: {
                    statusCode: 200,
                    total: songs.length
                },
                responses: songs
            })
        })
        .catch(error => res.send(error))

    },

    song: (req, res) => {

        db.Song.findByPk(req.params.id)
        .then(function(song) {

            return res.status(200).json({
                requestInfo: {
                    statusCode: 200
                },
                response: song
            })

        })

    },

    updateSong: (req, res) => {

        db.Song.update({
            titulo: req.body.title,
            duracion: req.body.duration,
            genero_id: req.body.genreId,
            album_id: req.body.albumId,
            artista_id: req.body.artistId,
        }, {
            where: {  
                id: req.params.id
           }
        })
        .catch(error =>res.send(error))

        return res.status(200).json({
            requestInfo: {
                statusCode: 200
            },
            message: "se actualizo correctamente la cancion: " + req.body.title 
        })

    },

    deleteSong: (req, res) => {
        
        db.Song.destroy({
            where: {
                id : req.params.id
            }
        })
        .catch(error => res.send(error))

        return res.status(200).json({
            requestInfo: {
                statusCode: 200
            },
            message: "se elimino correctamente la cancion: " + req.params.id
        })

    },

    createSong: (req, res) => {

        const _body = { 
            titulo: req.body.title,
            duracion: req.body.duration,
            genero_id: req.body.genreId,
            album_id: req.body.albumId,
            artista_id: req.body.artistId,
        }

        db.Song.create(_body)
        .catch(error => res.send(error))

        return res.status(200).json({
            requestInfo: {
                statusCode: 200
            },
            message: "se creo correctamente la cancion: " + req.body.title
        })
        
    }

}

module.exports = songsController;
