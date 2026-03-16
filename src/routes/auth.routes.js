const express=require("express");

const authController=require("../controllers/auth.controllers")

const router=express.Router();

/* POST /api/auth/register */ 
router.post("/register",authController.userRegistrationController);

module.exports= router;