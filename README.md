# Songs Endpoints:

- GET: "/canciones" (list songs)
- GET: "/canciones/:id" (get song by id)

- POST: "/canciones" (create song)
ejemplo de body:
`{
            "title": "duality",
            "duration": 87,
            "genreId": 1,
            "albumId": 1,
            "artistId": 1,
            "createdAt": null,
            "updatedAt": null
 }`
        
- PUT: "/canciones/:id" (update song)
ejemplo de body:
`{
            "title": "duality",
            "duration": 87,
            "genreId": 1,
            "albumId": 1,
            "artistId": 1,
            "createdAt": null,
            "updatedAt": null
 }`
 
- DELETE: "/canciones/:id" (delete song)

# Genres Endpoints:

- GET: "/generos" (list genres)
