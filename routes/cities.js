const express = require('express');
const router = express.Router();
var ObjectID = require('mongodb').ObjectID;

/* GET cities listing. */
router.get('/', function(req, res, next) {
    const {db} = req.app.locals;
    db.collection('cities').find().toArray((err,cities) => res.json(cities))
});

router.post('/', (req, res) => {
    const {db} = req.app.locals;
    db.collection('cities').insertOne(req.body, (err, city) => res.json(city));
});

router.put('/:id', (req, res) => {
    const {db} = req.app.locals;
    const {id} = req.params;
    db.collection('cities').updateOne({ _id: new ObjectID(id) }, { $set: req.body }, (err, city) => res.json(city));
});

router.delete('/:id', (req, res) => {
    const {db} = req.app.locals;
    const {id} = req.params;
    db.collection('cities').deleteOne({ _id: new ObjectID(id) }, (err, response) => res.json(response));
});

module.exports = router;
