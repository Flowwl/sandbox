export class Student {
    private name: string;
    private rollNo: number;

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getRollNo() {
        return this.rollNo;
    }

    public setRollNo(rollNo: number) {
        this.rollNo = rollNo;
    }
}
