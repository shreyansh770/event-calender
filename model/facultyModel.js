const mongoose = require('mongoose');

let {db_link} = require("../secrets");

mongoose.connect(db_link).then(db=>{
    console.log("faculty model connected");
}).catch((err)=>{
    console.log(err);
})

const facultySchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },

    email:{
      type:String,
      require:true,
      unique:true
    },

    phNo :{
       type:Number,
       unique:true
    },

    password:{
        type:String,
        required:true,
        min:8
    },

    confirmPassword:{
        type:String,
        required:true,
        min:8,
        validate :function(){
            return this.password === this.confirmPassword
        }
    },

    role:{
        type:String,
        enum:["Admin","teacher"],
        default:"teacher"
    }


})


facultySchema.pre('save',function(next){

    this.confirmPassword = undefined
    next()

})

const facultyModel = mongoose.model("facultyModel",facultySchema)

module.exports = facultyModel