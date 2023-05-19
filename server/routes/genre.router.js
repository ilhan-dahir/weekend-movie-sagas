const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {

  console.log("get/id req", req.params.id);
  movieID = req.params.id;
  // Add query to get all genres
  const sqlText = `
        SELECT title, poster, description, genres.name AS genre FROM movies 
        JOIN movies_genres
        ON movies_genres.movie_id = movies.id
        JOIN genres
        ON genres.id = movies_genres.genre_id
        WHERE "movies"."id" = $1;
  `;
  const sqlValue = [movieID];
  pool.query(sqlText, sqlValue)
    .then(result => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

module.exports = router;