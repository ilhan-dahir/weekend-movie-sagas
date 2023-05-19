const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

  console.log('RESSSS', res);
  // Add query to get all genres
  const query = `
  SELECT title, poster, description, genres.name FROM movies 
  JOIN movies_genres
  ON movies_genres.movie_id = movies.id
  JOIN genres
  ON genres.id = movies_genres.genre_id
  ORDER BY title;
  `;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

module.exports = router;