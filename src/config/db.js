const mongoose=require("mongoose");

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("server is Connected with Database Successfully");
    })
    .catch(err=>{
        console.log("Error connecting to DB");
        process.exit(1);
    })
}

module.exports= connectToDB;