import { Student } from "./Student";

export interface StudentDao {
    getAllStudents(): Student[];
    getStudent(rollNo: number): Student;
    updateStudent(student: Student);
    deleteStudent(student: Student);
}
