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
            return res.send({songs, longitud: songs.length})
        })
        .catch(error => res.send(error))

    },

    song: (req, res) => {

        db.Song.findByPk(req.params.id)
        .then(function(song) {

            res.render({song});
        })

    },

    updateSong: (req, res) => {

        db.Curso.update ({
            titulo: req.body.title,
            duracion: req.body.price,
            genero_id: req.body.genreId,
            album_id: req.body.albumId,
            artista_id: req.body.artistId,
        }, {
            where: {  
                id: req.params.id
           }
        })
        .catch(error =>res.send(error))

    },

    deleteSong: (req, res) => {
        
        db.Curso.destroy({
            where: {
                id : req.params.id
            }
        })
        .catch(error => res.send(error))

    },

    createSong: (req, res) => {
    
        if(!errors.isEmpty()) {
            return res.send("something went wrong");
        } 

        const _body = { 
            title : req.body.title,
            parrafo: req.body.parrafo,
            price: req.body.price,
            image : req.file.filename,
            number : req.body.number,
        }

        db.Song.create(_body)
        .catch(error => res.send(error))
        
    }

}

module.exports = songsController;
