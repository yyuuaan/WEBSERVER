const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('My New App!');
});

app.get('api/heroes', (req, res) => {
  res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
});

app.get('api/heroes/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/api/heroes/:title/:publisher', (req, res) => {
  res.send(req.params);
});

app.get('/api/heroes/:title/:publisher', (req, res) => {
  res.send([req.params, req.query]);
});

app.get('/api/movies', (req, res) => {
  res.send(movies);
});

app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(h => h.id === parseInt(req.params.id));
  if (!movie) return res.status(404).sned('The movie with the given ID was not found.')
  res.send(movie);
});

app.listen(3000, () => console.log('Listening on port 3000'));

