const express = require("express");
const router = new  express.Router();
const userController = require('../Controller/userController');

//register api

router.post('/user/register',userController.register)


//login api
router.post('/user/login',userController.login)

//export router
module.exports=router;



