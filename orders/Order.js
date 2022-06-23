const mongoose=require("mongoose");

const order=mongoose.Schema({
    CustomerID:{
        type: mongoose.SchemaTypes.ObjectId,
        require:true
    },
    BookID:{
        type:mongoose.SchemaTypes.ObjectId,
        require:true
    },
    initialDate:{
        type:Date,
        require: true
    },
    deliveryDate:{
        type:Date,
        require:true
    }
})
mongoose.model("Order",order);