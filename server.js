const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin1234@ds127948.mlab.com:27948/music-player', { useNewUrlParser: true });
const db = mongoose.connection;
const serverPort = 8000;

db.once('open', () => {
	console.log('mongoose connected');
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));


const GenreController = require('./controller/GenreController');
const RecentController = require('./controller/RecentController');
const RecommendController = require('./controller/RecommendController');

app.use('/genres', GenreController);
app.use('/recents', RecentController);
app.use('/recommends', RecommendController);

app.listen(serverPort);
console.log(`API Server listening to port: ${serverPort}.`);
