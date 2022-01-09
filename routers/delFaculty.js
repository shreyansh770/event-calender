const express = require('express');
const facultyModel = require('../model/facultyModel');
const { protectRoute, isAuthToDel } = require('./authHelper');
const delFacultyRouter = express.Router();

delFacultyRouter.route("/").post(protectRoute,isAuthToDel(["Admin"]),deleteFac)

async function deleteFac(req,res){
    
    try {

     let userTodelEmail = req.body.delEmail;
     
     let delUser = await facultyModel.deleteOne({email:userTodelEmail})

     res.json({
         message:"User deleted",
         user : delUser
     })
        
      

    } catch (error) {
        
    }
}

module.exports = delFacultyRouter