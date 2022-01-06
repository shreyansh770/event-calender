const jwt = require('jsonwebtoken');
const facultyModel = require('../model/facultyModel');
const {
    JWT_KEY
} = require('../secrets');



module.exports.protectRoute =
    function protectRoute(req, res, next) {


        try {

            console.log(req);

            let cookieToken = req.body.token
           
            if (cookieToken) {
                
                let isVerfied = jwt.verify(cookieToken, JWT_KEY)
                console.log(isVerfied);
                if (isVerfied) {
                    req.userId = isVerfied.id;
                    next()
                } else {
                    res.json({
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
                

                let user = await facultyModel.find({email:userId});
                

                if (user) {

                    let isUserAuth = roles.includes(user[0].role)
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