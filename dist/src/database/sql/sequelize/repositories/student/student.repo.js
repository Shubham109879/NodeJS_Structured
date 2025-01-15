"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepo = void 0;
const student_model_js_1 = require("../../models/student.model.js");
class StudentRepo {
    constructor() {
        this.getStudentById = (id) => __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_js_1.Student.findByPk(id);
            return student;
        });
        this.getStudents = (req) => __awaiter(this, void 0, void 0, function* () {
            const students = yield student_model_js_1.Student.findAll({});
            return students;
        });
        this.createStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_js_1.Student.create({
                name: req.body.name,
                age: parseInt(req.body.age),
            });
            return student;
        });
        this.updateStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_js_1.Student.findByPk(req.params.id);
            if (student != null) {
                student.set("name", req.body.name);
                student.set("age", req.body.age);
                yield student.save();
            }
            return student;
        });
        this.deleteStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_js_1.Student.destroy({
                where: {
                    id: req.params.id,
                }
            });
            return student;
        });
    }
}
exports.StudentRepo = StudentRepo;
//# sourceMappingURL=student.repo.js.map