const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recentSchema = new Schema({
  "title": String,
  "artist": String,
  "thumbnail": String
},{
  timestamps: true
});

const Recent = mongoose.model('Recent', recentSchema);

module.exports = Recent;
