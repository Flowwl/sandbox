import { content } from "../../logs";

export class StudentView {
    public printStudentDetails(studentName: string, studentRollNo: string) {
        content("Student: ");
        content("Name: " + studentName);
        content("Roll No: " + studentRollNo);
    }
}
