const mongoose=require("mongoose");

const book= mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    numberPages:{
        type:Number,
        require:false
    },
    publisher:{
        type:String,
        require:false
    }


})
mongoose.model("Book",book)