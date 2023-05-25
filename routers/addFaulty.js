const express = require('express');
const facultyModel = require('../model/facultyModel');
const { protectRoute, isAuth } = require('./authHelper');
const addFacultyRouter = express.Router();


addFacultyRouter.route("/").post(protectRoute,isAuth(["Admin"]),facultyAdd)



async function facultyAdd(req,res){

    try {
        
        let facBdy = req.body
        facBdy.token = undefined
       
        let newFaculty = await facultyModel.create(facBdy)
        res.json({
            message : "faculty added",
            newFaculty
        })

        
    } catch (error) {
        return res.json({
            message: "server error"
        })
    }

}




module.exports = addFacultyRouter