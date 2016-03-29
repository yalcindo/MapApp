var express = require("express");
var router = express.Router();
var geocoder = require("node-geo");
/* GET home page. */
router.get('/', function(req, res, next) {
	// var adress = this.request.body;

	function getLatLang(param){
		return new Promise(function(resolve, reject){
			geocoder.geocode(param, function(err, data) {
				if(err !== null) {
					return reject(err);
				}
				resolve(data.results[0].geometry.location);
			});
		});
	}
	getLatLang("Falls Church, VA 22030")
	.then(function(data) {
		console.log("data",data);
		res.render('index', { data:data });
	});


});

module.exports = router;
