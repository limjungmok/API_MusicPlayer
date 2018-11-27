const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Genre = require('../models/Genre');

router.use(bodyParser.urlencoded({ extended:true }));

router.get('/', function (req, res) {
	Genre.find((err, genres) => {
        
		if(err) {
			res.status(500).json({
				message: 'Error Occured from /genres.'
			});
		} else {
			res.json(genres);
		}
	});
});
router.get('/:id', function (req, res) {
	Genre.find((err, genres) => {
		if(err) {
			res.status(500).json({
				message: 'Error Occured from /genres.'
			});
		} else {
			res.json(genres);
		}
	});
});
router.post('/', function (req, res) {
    const {
        title,
        thumbnail,
        link
    } = req.body;
    const newGenre = new Genre({
        title,
        thumbnail,
        link
    });
    newGenre.save((err, data) => {
        if(err) {
            res.status(500).json({
                message: 'Server Error for new Genre'
            });
        } else {
            res.json(data);
        }
    });
});

module.exports = router;