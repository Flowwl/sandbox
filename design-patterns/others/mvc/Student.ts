export class Student {
    private rollNo: string;
    private name: string;

    public getRollNo(): string {
        return this.rollNo;
    }

    public setRollNo(rollNo: string) {
        this.rollNo = rollNo;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
}
