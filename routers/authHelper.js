const jwt = require('jsonwebtoken');
const {
    JWT_KEY
} = require('../secrets');



module.exports.protectRoute =
    function protectRoute(req, res, next) {

        try {

            if (req.cookies.login) {

                console.log("pr", req.cookies);

                let isVerfied = jwt.verify(req.cookies.login, JWT_KEY)

                if (isVerfied) {
                    console.log(isVerfied.id);
                    next()
                } else {
                    return res.json({
                        message: "Not Authorized"
                    })
                }

            } else {

            }

        } catch (error) {
            res.send({
                message: "operation not allowed"
            })
        }
    }