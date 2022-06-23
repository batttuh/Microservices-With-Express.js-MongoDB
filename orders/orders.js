const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
require("./Order");
const order=mongoose.model("Order");
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/test-db",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("Connected");
})

app.post("/order",(req,res)=>{
    var newOrder={
        CustomerID:mongoose.Types.ObjectId(req.body.CustomerID),
        BookID:mongoose.Types.ObjectId(req.body.BookID),
        initialDate:req.body.initialDate,
        deliveryDate:req.body.deliveryDate
    }
    var order = new Order(newOrder)
    order.save()
    .then(()=>{
        res.send("success order");
    }).catch((err)=>{
        throw err;
    })
});

app.listen(6000,()=>{
    console.log("created server");
});