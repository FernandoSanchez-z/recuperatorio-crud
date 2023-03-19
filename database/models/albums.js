module.exports = (sequelize, dataTypes) => { 

    let alias = "albumes"

    let cols = {
        id: {
            autoincremental: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            allowNull: false,
            type: dataTypes.STRING
        },
        duracion: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'albumes',
        timestamps: false,
        underscored: true
    }

    const Album = sequelize.define(alias, cols, config);

    Album.associate = function(models) {
        Album.hasMany(models.Song, { 
            as: 'albumes',
            foreignKey: 'album_id',
        })
    }
    
    return Album;

}