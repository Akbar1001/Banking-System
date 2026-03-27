const express=require("express");

const cookieParser=require("cookie-parser")

/**
 * Routes Required
 */
const authRouter=require("./routes/auth.routes")
const accountRouter=require("./routes/account.routes");

/**
 * Routes Used
 */
const app=express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/accounts",accountRouter)



module.exports=app;