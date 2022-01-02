const express = require('express');
const cookieParser = require('cookie-parser');
const cors  = require('cors')
const getEventRouter = require('./routers/getEventRouter');
const eventRouter = require('./routers/eventRouter');
const loginRouter = require('./routers/login');
const addFacultyRouter = require('./routers/addFaulty');


let app = express();

app.use(cookieParser())
app.use(express.json());
// app.use(express.static('view'))
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
  }));
 
// for CORS 
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use("/addEvent",eventRouter)
app.use("/getEvent",getEventRouter)
app.use("/auth",loginRouter)
app.use("/addfaculty",addFacultyRouter)


app.listen(3000,()=>{
    console.log("Server started");
})