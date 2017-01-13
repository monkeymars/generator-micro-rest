const mongoose = require('./../config');
let Schema = mongoose.Schema;
let movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  views: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
