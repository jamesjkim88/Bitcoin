var express = require('express');
var router = express.Router();
var request = require("request");
var config = require("../config");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get("/bitcoin", function(req,res){
    request({
        url: config.currency.firstHalf + req.query.currency + config.currency.key,
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36",
            "Content-Type": "application/json"
        }
    }, function(err, result){
        if(err) console.log("error: ", error);
        else {
            console.log("results: " , result);
            res.status(200).json(result);
        }
    })
});

module.exports = router;