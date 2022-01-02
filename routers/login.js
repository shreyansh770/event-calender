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

            let token = jwt.sign({
                id: payload
            }, JWT_KEY)

            // login cookie
            res.cookie('login', token, {
                httpOnly: true,
            })

            let updatedUser = await facultyModel.findOneAndUpdate({
                email: user.email
            }, {
                token: token
            }, {
                returnDocument: true
            })
            res.json({
                message: "User logged in",
                user: updatedUser,
                token: token
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

        let token_id = req.query.cookieToken;
        let user = await facultyModel.find({
            token: token_id
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




module.exports = loginRouter