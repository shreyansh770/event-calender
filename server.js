const express = require('express');
const getEventRouter = require('./routers/getEventRouter');
const eventRouter = require('./routers/eventRouter');

let app = express();


app.use(express.json());

// for CORS 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/addEvent",eventRouter)
app.use("/getEvent",getEventRouter)


app.listen(3000,()=>{
    console.log("Server started");
})