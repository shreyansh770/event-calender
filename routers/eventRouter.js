const express = require('express');
let eventModel = require("../model/eventModel")
const eventRouter = express.Router();

eventRouter.route("/").post(addEvent)

async function addEvent(req,res){

    try {
        
        console.log(req.body);
        let createdEvent = await eventModel.create(req.body)
        
        res.send({
            message : "event created",
            createdEvent
        })    
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message:error.message
        })
    }


}



module.exports = eventRouter;