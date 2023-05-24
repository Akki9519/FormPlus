const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect("mongodb://127.0.0.1:27017/formplus?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`Mongo DB Connected`);
    }
    catch(err)
    {
        console.error(err);
        process.exit(1);
    }
}

module.exports=connectDB;