const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Recommend = require('../models/Recommend');

router.use(bodyParser.urlencoded({ extended:true }));

router.get('/', function (req, res) {
	Recommend.find((err, recommends) => {
		if(err) {
			res.status(500).json({
				message: 'Error Occured from /recommends.'
			});
		} else {
			res.json(recommends);
		}
	});
});
router.get('/:id', function (req, res) {
	Recommend.find((err, recommends) => {
		if(err) {
			res.status(500).json({
				message: 'Error Occured from /recommends.'
			});
		} else {
			res.json(recommends);
		}
	});
});
router.post('/', function (req, res) {
    const {
        title,
		like,
		thumbnail,
		link,
		count
    } = req.body;
    const newRecommend = new Recommend({
        title,
		like,
		thumbnail,
		link,
		count
    });
    newRecommend.save((err, data) => {
        if(err) {
            res.status(500).json({
                message: 'Server Error for new Recommend'
            });
        } else {
            res.json(data);
        }
    });
});

module.exports = router;