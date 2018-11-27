const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  "title": String,
  "thumbnail": String,
  "link": String
},{
  timestamps: true
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
