var express = require('express');
var router = express.Router();
var kafka = require('./kafka/client');


router.post('/getcars', (req,res) =>{

    let city = req.body.city;
let multi_city = req.body.multi_city;
let s_date = req.body.s_date;
let e_date = req.body.e_date;
kafka.make_request('getcars_topic',{
    "city":city, "multi_city": multi_city, "s_date":s_date, "e_date": e_date }, function(err,results){

    console.log('in result');
    console.log(results);
    res.json(results);
});

});

router.post('/bookcar', (req,res) =>{
    let id = req.body.id;
    let s_date = '2018-01-27';
    let e_date = ('2018-01-28');
kafka.make_request('bookcar_topic',{id:id, s_date:s_date, e_date:e_date}, function(err,results){

    console.log('in result');
    res.json(results);
});
});


router.get('/cancelcar', (req,res) =>{

    let id = "18";
kafka.make_request('cancelcar_topic',{id:id}, function(err,results){

    console.log('in result');
    res.json(results);
});
});



router.post('/filtercar', (req,res) =>{

    let filter = req.body.filter;

    let city = req.body.city;
    let multi_city = req.body.multi_city;
    let s_date = req.body.s_date;
    let e_date = req.body.e_date;


console.log(filter);
kafka.make_request('filtercar_topic',{filter:filter, "city":city, "multi_city": multi_city, "s_date":s_date, "e_date": e_date}, function(err,results){

    console.log('in result');
    res.json(results);
});
});

module.exports =router;