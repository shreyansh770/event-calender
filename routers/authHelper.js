const jwt = require('jsonwebtoken');
const facultyModel = require('../model/facultyModel');
const {
    JWT_KEY
} = require('../secrets');



module.exports.protectRoute =
    function protectRoute(req, res, next) {


        try {

            if (req.cookies.login) {

                let isVerfied = jwt.verify(req.cookies.login, JWT_KEY)

                if (isVerfied) {
                    req.userId = isVerfied.id;
                    next()
                } else {
                    return res.json({
                        message: "Not Authorized"
                    })
                }

            } else {
                return res.json({
                    message: "plz login"
                })
            }

        } catch (error) {
            res.send({
                message: error.message
            })
        }
    }


module.exports.isAuth =
    function isAuth(roles) {

        return async function (req, res, next) {

            let {
                userId
            } = req
            try {

                let user = await facultyModel.findById(userId);
                console.log(user);

                if (user) {

                    let isUserAuth = roles.includes(user.role)
                    if (isUserAuth) {
                        console.log("user is authorized");
                        next()
                    }else{
                        res.send("user not authorized->")
                    }

                } else {

                    res.json({
                        message: "User not found"
                    })
                }


            } catch (error) {

                res.status(500).json({
                    messsage : error.message
                })
            }

        }
    }