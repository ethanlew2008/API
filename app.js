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

app.get("/lb",async(req,res)=>{

    console.log(req.query.name);
    let result = await Profile.find({});
    res.send(result); 
})

app.post("/lb",(req,res)=>{

    let newprofile = new Profile();
    newprofile.Name = req.body.Name;
    newprofile.Age = req.body.Age;
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
