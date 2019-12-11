const express = require('express');
const router = express.Router();
ObjectID = require('mongodb').ObjectID;
const axios = require ('axios');

const API_END_POINT_Rennes = "https://data.rennesmetropole.fr/api/records/1.0/search/?";
const STATIONS_Rennes = "dataset=etat-des-stations-le-velo-star-en-temps-reel&facet=nom" +
    "&facet=etat&facet=nombreemplacementsactuels&facet=nombreemplacementsdisponibles" +
    "&facet=nombrevelosdisponibles&rows=55";

const API_END_POINT_PARIS = "https://opendata.paris.fr/api/records/1.0/search/?";

const STATION_Paris="dataset=velib-disponibilite-en-temps-reel&facet=creditcard&facet=station_state&facet=station_name&rows=1000"

function getStationRennes() {

    axios.get(`${API_END_POINT_Rennes}${STATIONS_Rennes}`).then((response) => {
        console.log(response.data.nhits);
        return response.data.nhits;
    });

}

function getStationParis () {
    axios.get(`${API_END_POINT_PARIS}${STATION_Paris}`).then((response) => {
        console.log(response.data.records);
    });
}

router.get('/',function (req,res,next){
    const {db} = req.app.locals;
    db.collection('stations').find().toArray((err,stations) => res.json(stations))
});

module.exports=router;