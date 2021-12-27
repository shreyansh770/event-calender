
const mongoose = require('mongoose');

let {db_link} = require("../secrets");

mongoose.connect(db_link).then(db=>{
    console.log("event model connected");
}).catch((err)=>{
    console.log(err);
})

const eventSchema = new mongoose.Schema({
 
        title:{
            type : String
        },
    
        facultyName:{
            type : String
        },
    
        sDay:{
            type : String
        },
    
        eDay:{
            type : String
        },
    
        sTime:{
            type : String
        },
    
        eTime:{
            type : String
        },
    
        din:{
            type : String
        },
    
        desp:{
            type : String
        }
    
 
})

// eventSchema.pre('save',async(next)=>{
//    console.log(this);
//    this.key =  this.event.evObj.sDay;
//    next();
// })

const eventModel = mongoose.model("eventModel",eventSchema)


module.exports = eventModel;