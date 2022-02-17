import { Student } from "./Student";
import { StudentView } from "./StudentView";

export class StudentController {
    private model: Student;
    private view: StudentView;

    public constructor(model: Student, view: StudentView) {
        this.model = model;
        this.view = view;
    }

    public setStudentName(name: string) {
        this.model.setName(name);
    }

    public getStudentName() {
        return this.model.getName();
    }

    public setStudentRollNo(rollNo: string) {
        this.model.setRollNo(rollNo);
    }

    public getStudentRollNo() {
        return this.model.getRollNo();
    }

    public updateView() {
        this.view.printStudentDetails(this.model.getName(), this.model.getRollNo());
    }
}
