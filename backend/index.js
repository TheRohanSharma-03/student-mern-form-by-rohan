require("./database/db");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Student = require("./database/mondels");

const app = express();

const port = process.env.Port || 8000;

app.use(cors());
app.use(bodyParser.json());

app.post('/',async(req,res)=>{
    const data = new Student({
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
        state:req.body.state,
        phone:req.body.phone,
        password:req.body.password,
    });
    await data.save();
    res.json(req.body);
});

app.get('/show',(req,res)=>{
    const display = async() =>{
        const data = await Student.find();
        res.json(data);
        console.log(data);
    }
    display();
    
});

app.listen(port,()=>{
    console.log(`Server Started`);
});