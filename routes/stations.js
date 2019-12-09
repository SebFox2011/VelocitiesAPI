const express = require('express');
const router = express.Router();
ObjectID = require('mongodb').ObjectID;

router.get('/',function (req,res,next){

    const stuff = [
        {
            id:1,
            name:"Republique"
        },
        {
            id:2,
            name:"Gare"
        }
    ];

    /*res.status(200).send('Stations de vélo');
    next();
    res.json(stuff);*/
    res.status(200).json(stuff)
});

module.exports=router;