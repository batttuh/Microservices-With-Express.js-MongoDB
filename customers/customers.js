const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

app.use(bodyParser.json());
require("./Customer");
const Customer=mongoose.model("Customer");
mongoose.connect("mongodb://localhost:27017/test-db",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("Connected Customer");
})
app.get("/customers",(req,res)=>{
    Customer.find().then((customer)=>{
        res.json(customer);
    })
})
app.delete("/customer/:id",(req,res)=>{
    Customer.findByIdAndRemove(req.params.id).then((customer)=>{
        res.send("Customer deletted");
    })
})
app.get("/customer/:id",(req,res)=>{
    Customer.findById(req.params.id).then((customer)=>{
        res.send(customer);
    })
})

app.post("/customer",(req,res)=>{
    var newCustomer={
        name:req.body.name,
        age:req.body.age,
        address:req.body.address
    }
    var customer=new Customer(newCustomer);
    customer.save()
    .then(()=>{
        console.log("customer added");
        res.send("Customer Created");
    })
})
app.listen(7000,()=>{
    console.log("Customers service");
})