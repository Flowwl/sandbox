import { StudentVO } from "./StudentVO";
import { content } from "../../logs";

export class StudentBO {
    students: StudentVO[];

    public constructor() {
        this.students = [new StudentVO("Robert", 0), new StudentVO("John", 1)];
    }

    public deleteStudent(student: StudentVO) {
        this.students = this.students.filter((s) => s.getRollNo() === student.getRollNo());
        content("Student: Roll No " + student.getRollNo() + ", deleted from database");
    }

    public getAllStudents() {
        return this.students;
    }

    public getStudent(rollNo: number) {
        return this.students[rollNo];
    }

    public updateStudent(student: StudentVO) {
        this.students[student.getRollNo()].setName(student.getName());
        content("Student: Roll No " + student.getRollNo() + ", updated in the database");
    }
}
