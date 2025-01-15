import { Request } from "express";
import { IStudentRepo } from "../../../../repository.interfaces/student/student.repo.interface.js";
import { Student } from "../../models/student.model.js";


export class StudentRepo implements IStudentRepo{

    
    
    getStudentById=async (id: number)=>{
        const student=await Student.findByPk(id);
        return student;
    }

    getStudents=async (req: Request)=>{
        const students=await Student.findAll({});
        return students;
    }

    createStudent=async (req: Request):Promise<any>=>{
        const student=await Student.create({
            name: req.body.name,
            age: parseInt(req.body.age),
        })

        return student;
    }

    updateStudent=async (req: Request)=>{
        const student=await Student.findByPk(req.params.id);

        if(student!=null)
        {
           student.set("name",req.body.name);
           student.set("age",req.body.age);

           await student.save();
        }

        return student;
    }

    deleteStudent=async (req: Request)=>{
        
        const student=await Student.destroy({
            where:{
               id: req.params.id,
            }
           });

         return student;    
    }


}