const express = require('express');
const cookieParser = require('cookie-parser')
const getEventRouter = require('./routers/getEventRouter');
const eventRouter = require('./routers/eventRouter');
const loginRouter = require('./routers/login');
const addFacultyRouter = require('./routers/addFaulty');

let app = express();

app.use(cookieParser())
app.use(express.json());

// for CORS 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/addEvent",eventRouter)
app.use("/getEvent",getEventRouter)
app.use("/auth",loginRouter)
app.use("/addfaculty",addFacultyRouter)


app.listen(3000,()=>{
    console.log("Server started");
})