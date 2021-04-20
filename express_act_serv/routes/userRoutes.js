var express = require("express");
var router = express.Router();
var tracker = require("tracker");
let dbManager = require('../dbManager');
let actCol = require('../models/activitySchema');

router.get('/:userID', async (req, res)=> {
    let users = dbManager.get().collection("users");
//    let activities = dbManager.get().collection("activities");

    try{

	let user=await users.findOne({_id: req.params.userID});

	let actArr = await actCol.find({ user: req.params.userID});

//	let actArr = await actCursor.toArray();
	let current;
	for (item in actArr){
	    current = new tracker(actArr[item].activity.type, actArr[item].weight, actArr[item].distance, actArr[item].time);
	    actArr[item].calories = current.calculate();
	    console.log("Calories: " + current.calculate());
	}
	res.render('user', { searchID: user._id, activities: actArr});
    }catch (err){

	res.status(500).render('error', {message: err.message})
    }
});

module.exports = router;