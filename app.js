const express=require("express");
const http=require('http');
const path=require("path");
const fs=require("fs");
const bodyparser=require("body-parser");
const app=express();
const port=8000;
var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/neighborhoodform',{useNewUrlParser:true});




var neighborhoodformSchema=new mongoose.Schema({
  name:String,
    contact:String,
    walking_speed:String,
    Running:String,
    Bicycling:String,
    Games:String,
    Gardening:String,
    place:String,
    Swimming:String,
    Drinks:String,
    Activities:String,
    Parties:String,
    DogWalking:String,
    sports:String,
    Interest:String,
    Movies:String,
    Shopping:String,
    Restaurants:String,
    Reading:String,
    Errand:String,
    Rides:String,
    Childcare:String,
    Eldercare:String,
    Petcare:String,

    tutor:String,
    Repair:String,
    Other:String,


});

var Neighbour=mongoose.model('Neighbour',neighborhoodformSchema);


var ContactSchema=new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    help:String,
    
    

});

var Contact=mongoose.model('Contact',ContactSchema);



app.use('/static',express.static('static'))
app.use(express.urlencoded())
app.use(express.static('public'));


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
    res.status(200).render('index');
})

app.get('/contact',(req,res)=>{
    res.status(200).render('contact')
})

app.post('/contact',(req,res)=>{
    var mydata=new Contact(req.body);
    mydata.save().then(()=>{
        res.send("This item has been saved to the datbase")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    })
})

app.get('/form',(req,res)=>{
    res.status(200).render('form')
})
app.post('/form',(req,res)=>{
    var mydata=new Neighbour(req.body);
    mydata.save().then(()=>{
        res.send("This item has been saved to the datbase")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    })
})

    
app.get('/about',(req,res)=>{
    res.status(200).render('about')
})

app.listen(port,()=>{
    console.log(`The application started sucessfully on port ${port}`)
})
