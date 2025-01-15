import Joi from "joi";
import { ErrorHandler } from "../../common/handlers/error.handler";

export class StudentValidator{
    static async validateCreateRequest(requestBody)
    {
        try 
        {
           const schema=Joi.object({
             name: Joi.string().min(2).max(15).required(),
             age: Joi.number().integer().min(20).required(),
           }) 

           return await schema.validateAsync(requestBody);
        } 
        
        catch (error) 
        {
            ErrorHandler.handleValidationError(error);
        }
    }


    static async validateUpdateRequest(requestBody)
    {
        try 
        {
           const schema=Joi.object({
             name: Joi.string().min(2).max(15),
             age: Joi.number().integer().min(20),
           }) 

           return await schema.validateAsync(requestBody);
        } 
        
        catch (error) 
        {
            ErrorHandler.handleValidationError(error);
        }
    }
}