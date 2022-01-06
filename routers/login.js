const express = require('express');
const facultyModel = require('../model/facultyModel');
const jwt = require("jsonwebtoken")
let {
    JWT_KEY
} = require('../secrets')

const loginRouter = express.Router();

loginRouter.route("/signup").post(signUpUser)
loginRouter.route("/login").post(signInUser)
loginRouter.route("/logout").get(signOutUser)
loginRouter.route("/getUser").get(getUser)
loginRouter.route("/getFac").get(getAllUser)

async function signUpUser(req, res) {


    try {
        let userObj = req.body;
        let user = await facultyModel.create(userObj);
        res.json({
            message: "User sign-up plz login",
            user: user
        })

    } catch (error) {

        res.status(500).send({
            error: error.message
        })
    }
}

async function signInUser(req, res) {

    try {

        let userObj = req.body;

        
        let user = await facultyModel.findOne({
            email: userObj.email
        })
        
        

        if (user.password === userObj.password) {

            // creating JWT token for the user
            let payload = user.email;
            const token = jwt.sign({
                id: payload
            }, JWT_KEY)


            // login cookie
            res.cookie('login', token,{ httpOnly: true })

            console.log(req.cookies);
            
            res.json({
                message: "User logged in",
                user: user,
                token : token
            })


        } else {
            res.json({
                message: "Password or email wrong"
            })
        }

    } catch (error) {

        res.status(500).send({
            error: error.message
        })
    }

}

function signOutUser(req, res) {

    try {

        if (req.cookies.login) {


            res.clearCookie('login');
            res.send("user logged out")


        } else {
            res.send("plz login")
        }


    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
}

async function getUser(req, res) {
    try {

        let email_id = req.query.email;
        
        let user = await facultyModel.find({
            email: email_id
        })

        res.send({
            user: user
        })

    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
}


async function getAllUser(req,res){
    try {

        let users = await facultyModel.find();

        res.json({
            message:"All Users",
            users : users
        })
        
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
}


module.exports = loginRouter