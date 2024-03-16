const express = require("express");
const router = new  express.Router();
const userController = require('../Controller/userController');
const jwtMiddleware = require('../Middlewares/jwtMiddlewares')
const projectController =require('../Controller/projectController');
const multerConfig = require("../Middlewares/multerMiddleware");
//register api

router.post('/user/register',userController.register)


//login api
router.post('/user/login',userController.login)



//addProject
router.post('/projects/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)









//export router
module.exports=router;



