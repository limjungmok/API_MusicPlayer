const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Recent = require('../models/Recent');

router.use(bodyParser.urlencoded({ extended:true }));

router.get('/', function (req, res) {
	Recent.find((err, recents) => {
		if(err) {
			res.status(500).json({
				message: 'Error Occured from /recents.'
			});
		} else {
			res.json(recents);
		}
	});
});
router.get('/:id', function (req, res) {
	Recent.find((err, recents) => {
		if(err) {
			res.status(500).json({
				message: 'Error Occured from /recents.'
			});
		} else {
			res.json(recents);
		}
	});
});
router.post('/', function (req, res) {
    const {
        title,
		artist,
		thumbnail,
    } = req.body;
    const newRecent = new Recent({
        title,
		artist,
		thumbnail,
    });
    newRecent.save((err, data) => {
        if(err) {
            res.status(500).json({
                message: 'Server Error for new Recent'
            });
        } else {
            res.json(data);
        }
    });
});

module.exports = router;