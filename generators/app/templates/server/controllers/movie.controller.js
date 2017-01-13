const Movie = require('../models/movie.model');
module.exports = {
  // Create new Movie
  new: function (req, res) {
    Movie.create(req.body).then(function (response) {
      return res.send(response);
    }).catch(function (errResponse) {
      res.status(400);
      return res.send(errResponse);
    });
  },
  // Get all Movie
  get: function (req, res) {
    Movie.find(req.query).then(function (response) {
      return res.send(response);
    }).catch(function (errResponse) {
      res.status(400);
      return res.send(errResponse);
    });
  },
  // Get one Movie
  getOne: function (req, res) {
    Movie.findOne({_id: req.params.id}).then(function (response) {
      if (response === null) {
        res.status(404);
        return res.send({
          'error-code': 0  // Not Found
        });
      }
      return res.send(response);
    }).catch(function (errResponse) {
      res.status(400);
      return res.send(errResponse);
    });
  },
  // Update formula Movie
  update: function (req, res) {
    req.body.updated_at = new Date();
    // Find and update
    Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function (error, response) {
      if (error) {
        res.status(400);
        return res.send(error);
      }
      return res.send(response);
    });
  },
  // Delete Movie
  delete: function (req, res) {
    Movie.remove({_id: req.params.id}).then(function (response) {
      return res.send(response);
    }).catch(function (errResponse) {
      res.status(400);
      return res.send(errResponse);
    });
  }
};
