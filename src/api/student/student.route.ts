import express from "express";
import { StudentController } from "./student.controller";
// import dotenv from "dotenv";
// dotenv.config();


export const registerStudent=(app:express.Application): void =>{

    const studentRouter=express.Router();

    console.log(studentRouter);
 
    const controller=new StudentController();
 
    studentRouter.get('/all',controller.get);
 
    studentRouter.get('/:id',controller.getById);
 
    studentRouter.post('/',controller.create);
 
    studentRouter.put('/:id',controller.update);
 
    studentRouter.delete('/:id',controller.del);
 
    app.use(express.json());
 
    app.use('/api/v1/student',studentRouter);
 
  }
 