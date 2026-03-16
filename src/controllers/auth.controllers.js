const {userModel}=require("../models/user.model");
const jwt=require("jsonwebtoken");
/** 
* - user registration controller
* - POST /api/auth/register
*/

async function userRegistrationController(req,res){
    const {email,name,password}=req.body;

    const isExists = await userModel.findOne({
        email:email
    })

    if(isExists){
        return res.status(422).json({
            message:"User with this email already exits",
            status: "Failed"
        })
    }

    const user = await userModel.create({
        email,name,password
    })

    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"3d"});
    
    res.cookie("token",token);

    res.status(200).json({
        user:{
            _id:user._id,
            email:user.email,
            name:user.name
        },
        token
    })
}

module.exports={userRegistrationController}