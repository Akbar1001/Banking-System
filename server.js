require("dotenv").config()

const app=require("./src/app");

const PORT=3000;

const connectToDB=require("./src/config/db");

connectToDB();

app.listen(PORT,()=>{
    console.log(`Server is Running at Port : ${PORT}`);
})