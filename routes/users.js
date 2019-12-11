const express = require('express');
const router = express.Router();
var ObjectID = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function(req, res, next) {
  const {db} = req.app.locals;
  db.collection('users').find().toArray((err,users) => res.json(users));
});

router.post('/', (req, res) => {
  const {db} = req.app.locals;
  db.collection('users').insertOne(req.body, (err, user) => res.json(user));
});

router.put('/:id', (req, res) => {
  const {db} = req.app.locals;
  const {id} = req.params;
  db.collection('users').updateOne({ _id: new ObjectID(id) }, { $set: req.body }, (err, user) => res.json(user));
});

router.delete('/:id', (req, res) => {
  const {db} = req.app.locals;
  const {id} = req.params;
  db.collection('users').deleteOne({ _id: new ObjectID(id) }, (err, response) => res.json(response));
});


module.exports = router;
