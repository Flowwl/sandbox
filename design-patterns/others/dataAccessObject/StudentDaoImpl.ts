import { StudentDao } from "./StudentDao";
import { Student } from "./Student";
import { content } from "../../logs";

export class StudentDaoImpl implements StudentDao {

    //list is working as a database
    students: Student[];

    public constructor() {
        this.students = [new Student("Robert", 0), new Student("John", 1)];
    }

    public deleteStudent(student: Student) {
        this.students.filter((s) => s.getRollNo() === student.getRollNo());
        content("Student: Roll No " + student.getRollNo() + ", deleted from database");
    }

    public getAllStudents() {
        return this.students;
    }

    public getStudent(rollNo: number) {
        return this.students[rollNo];
    }

    public updateStudent(student: Student) {
        this.students[student.getRollNo()].setName(student.getName());
        content("Student: Roll No " + student.getRollNo() + ", updated in the database");
    }
}
