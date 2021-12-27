const express = require('express');
let eventModel = require("../model/eventModel")
const getEventRouter = express.Router();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

getEventRouter.route("/").get(getEvent)



async function getEvent(req, res) {



    let monthIdx = months.indexOf(req.query.eventMonth)+1
    if(monthIdx<9) monthIdx = "0"+monthIdx
    let toFind  = req.query.eventYear+"-"+monthIdx+"-"+req.query.eventDay
    toFind = toFind.toString()
    // console.log(req.query.eventYear+"-"+monthIdx+"-"+req.query.eventDay);
    let ans = await eventModel.find({
        sDay: toFind
    })
    // console.log(ans);
    if(ans.length==0){
        res.send({
            "result": false
        })
    }else{
        res.send({
            "result": true
        })
    }


}

module.exports = getEventRouter;