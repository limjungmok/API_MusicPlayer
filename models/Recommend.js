const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recommendSchema = new Schema({
  "title": String,
  "like": Number,
  "thumbnail": String,
  "link": String,
  "count": Number
},{
  timestamps: true
});

const Recommend = mongoose.model('Recommend', recommendSchema);

module.exports = Recommend;
