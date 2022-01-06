const express = require('express');

const cors = require('cors')
const getEventRouter = require('./routers/getEventRouter');
const eventRouter = require('./routers/eventRouter');
const loginRouter = require('./routers/login');
const addFacultyRouter = require('./routers/addFaulty');


let app = express();
app.use(express.json());
app.use(cors());
const cookieParser = require('cookie-parser');
app.use(cookieParser())


app.use("/addEvent", eventRouter)
app.use("/getEvent", getEventRouter)
app.use("/auth", loginRouter)
app.use("/addfaculty", addFacultyRouter)
app.use("/delFac",addFacultyRouter)


app.listen(3000, () => {
  console.log("Server started");
})