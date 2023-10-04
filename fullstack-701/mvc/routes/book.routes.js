const express=require('express');
const Router=express.Router();
const BookController=require('../controller/bookcontroller')
Router.get("/",BookController.getUser);
Router.post("/",BookController.addBook);


module.exports=Router;