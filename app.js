const express = require('express');
const Profile = require('./profile')
const Score = require('./Score');
const app = express();
app.use(express.json());

// Mongoose
const client = require('mongoose');
const uri = "mongodb+srv://lbuser:1234@cluster0.fdywk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
client.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.port || 8080;
app.listen(port,()=>{
    console.log("Server Started");
})

app.get("/",(req,res)=>{

    res.send("Hello");
})

app.get("/lb",(req,res)=>{

    console.log(req.query.name);
    res.send("Pretend I am Retuning A Users Profile");
})

app.post("/lb",(req,res)=>{

    let newprofile = Profile();
    newprofile.Name = req.body.profile.name;
    newprofile.Age = req.body.profile.age;
    newprofile.save();
    

    res.send('hello');
})

app.post("/score",(req,res)=>{
    let newscore = Score();
    newscore.Name = req.body.Name;
    newscore.Score = req.body.Score;
    newscore.save();
    res.send("Score Submitted");
})