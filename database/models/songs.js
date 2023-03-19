module.exports = (sequelize, dataTypes) => {

    let alias = "canciones"

    let cols = {
        id: {
            autoincremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        titulo: {
            allowNull: false,
            type: dataTypes.STRING
        },
        duracion: {
            allowNull: false,
            type: dataTypes.STRING
        },
        genero_id : {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        album_id : {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        artista_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'canciones',
        timestamps: false,
        underscored: true
    }

    const Song = sequelize.define(alias, cols, config);

    Song.associate = function(models) {
        Song.hasOne(models.Song, {
            as: 'albumes',
            foreignKey: 'album_id',
        }),
        Song.hasOne(models.Song, {
            as: 'generos',
            foreignKey: 'genero_id',
        }),
        Song.hasOne(models.Song, {
            as: 'artistas',
            foreignKey: 'artista_id',
        })
    }
    
    return Song;

}