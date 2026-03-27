const express=require("express");
const authMiddleware=require("../middleware/auth.middleware");
const router=express.Router();
const accountControllers=require("../controllers/account.controllers");
/**
 * - POST /api/accounts/
 * - Create a new account
 * - Protected Route 
 */
router.post("/",authMiddleware.authMiddleware,accountControllers.createAccountController )


module.exports=router 