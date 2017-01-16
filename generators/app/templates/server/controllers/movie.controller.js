const Base = require('../models/<%=model%>.model');
module.exports = {
  // Create new Movie
  new: function (req, res) {
    Base.create(req.body).then(function (response) {
      return res.send(response);
    }).catch(function (errResponse) {
      res.status(400);
      return res.send(errResponse);
    });
  },
  // Get all Movie
  get: function (req, res) {
    Base.find(req.query).then(function (response) {
      return res.send(response);
    }).catch(function (errResponse) {
      res.status(400);
      return res.send(errResponse);
    });
  },
  // Get one Movie
  getOne: function (req, res) {
    Base.findOne({_id: req.params.id}).then(function (response) {
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
    Base.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function (error, response) {
      if (error) {
        res.status(400);
        return res.send(error);
      }
      return res.send(response);
    });
  },
  // Delete Movie
  delete: function (req, res) {
    Base.remove({_id: req.params.id}).then(function (response) {
      return res.send(response);
    }).catch(function (errResponse) {
      res.status(400);
      return res.send(errResponse);
    });
  }
};
