const { express } = require('express');
const mongoose=require('mongoose');

const contact=mongoose.Schema(
    {
        EmployeeFullName:{
            type:String
        },
        JobTitle:{
            type:String
        },
        PhoneNumber:{
            type:Number
        },
        Address:{
            type:String
        },
        City:{
            type:String
        },
        State:{
            type:String
        },
        EmergencyContact:{
            type:Number
        },
        PhoneNumber1:{
            type:Number
        },
        Description:{
            type:String
        }
    }
);

module.exports=new mongoose.model('employee',contact);