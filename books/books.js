const express=require("express");
const app=express();
const mongoose=require("mongoose")
const bodyParser=require("body-parser");
require("./Book");
const Book =mongoose.model("Book");
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/test-db",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("Connected");
})
app.get("/",(req,res)=>{
    res.send("this is our main endpoint");
})
app.get("/book",((req,res)=>{
    Book.find().then((book)=>{
        res.json(book);
    })
}))
app.get("/book/:id",(req,res)=>{
    Book.findById(req.params.id).then((book)=>{
        res.json(book);
    })
})
app.delete("/book/id",(req,res)=>{
    Book.findOneAndRemove(req.params.id)
    .then(()=>{
        res.send("is deleted");
    })
})
app.post("/post",(req,res)=>{
    var newBook={
        "title":req.body.title,
        "author":req.body.author,
        "numberPages":req.body.numberPages,
        "publisher":req.body.publisher
    }
    var book=new Book(newBook);
    book.save()
    .then(()=>{
        console.log("new Book created")
    })
    .catch((err)=>{
        console.log(err);
    })
    res.send("Succesfully");
})
app.listen(8000,()=>{
console.log("Book service");
})