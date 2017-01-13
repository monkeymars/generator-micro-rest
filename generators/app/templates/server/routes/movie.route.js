const routeMovie = require('../controllers/movie.controller');
module.exports = function (server) {
  server.post('/newMovie', routeMovie.new);
  server.get('/getMovie', routeMovie.get);
  server.get('/getMovie/:id', routeMovie.getOne);
  server.put('/updateMovie/:id', routeMovie.update);
  server.get('/deleteMovie/:id', routeMovie.delete);
};
