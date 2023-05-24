const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const connectDB=require('./connectDB')

require('dotenv');
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
const cors=require('cors');
const Employee=require('./contactmodel')


const app=express();
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

mongoose.set("strictQuery", false);
connectDB();

//Get detail of particular employee
app.get('/get/:id',async(req,res)=>{
    const id=req.params.id;
    const data=await Employee.find({_id:id});
    res.send({"detail":data})
})
//Get the detail of all employee
app.get('/get',async(req,res)=>{
    const data=await Employee.find();
    res.send({"Detail":data})
})

// Save the detail of all employee
app.post('/save',async(req,res) =>{
    const data=req.body;
    const employee=new Employee(data);
    const result=await employee.save();
    res.send({"employee":result});
})

// Delete the detail of employee of particular id
app.delete('/delete/:id',async(req,res)=>{
    const data=await Employee.deleteOne({ _id: req.params.id });
    res.send("Deleted the employee detail Successfully");
})

//update the detail of particular of id
app.patch('/update/:id', async(req,res)=>{
    const _id=req.params.id;
    Employee.findByIdAndUpdate(id, newData, { new: true })
    .then(updatedUser => {
      res.send(updatedUser);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    });
})

app.listen(4000,()=>{
    console.log("connected to port");
})


