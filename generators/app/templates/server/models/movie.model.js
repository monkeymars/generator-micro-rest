const mongoose = require('./../config');
let Schema = mongoose.Schema;
let baseSchema = new Schema({
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
const baseModel = mongoose.model('<%=model%>', baseSchema);
module.exports = baseModel;
