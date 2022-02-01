export class Employee {
    private readonly name: string;
    private readonly dept: string;
    private readonly salary: number;
    private readonly subordinates: Employee[];

    constructor(name: string, dept: string, sal: number) {
        this.name = name;
        this.dept = dept;
        this.salary = sal;
        this.subordinates = [];
    }

    public add(e: Employee) {
        this.subordinates.push(e);
    }

    public remove(e: Employee) {
        this.subordinates.filter((emp) => e !== emp);
    }

    public getSubordinates() {
        return this.subordinates;
    }

    public toString() {
        return ("Employee :[ Name : " + this.name + ", dept : " + this.dept + ", salary :" + this.salary + " ]");
    }
}
