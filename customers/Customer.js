const mongoose=require("mongoose");

const customer=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    }
})

mongoose.model("Customer",customer);