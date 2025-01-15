"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerStudent = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
// import dotenv from "dotenv";
// dotenv.config();
const registerStudent = (app) => {
    const studentRouter = express_1.default.Router();
    console.log(studentRouter);
    const controller = new student_controller_1.StudentController();
    studentRouter.get('/all', controller.get);
    studentRouter.get('/:id', controller.getById);
    studentRouter.post('/', controller.create);
    studentRouter.put('/:id', controller.update);
    studentRouter.delete('/:id', controller.del);
    app.use(express_1.default.json());
    app.use('/api/v1/student', studentRouter);
};
exports.registerStudent = registerStudent;
//# sourceMappingURL=student.route.js.map