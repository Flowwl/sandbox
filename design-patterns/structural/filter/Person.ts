export class Person {
    private readonly name: string;
    private readonly gender: string;
    private readonly maritalStatus: string;

    public constructor(name: string, gender: string, maritalStatus: string) {
        this.name = name;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }

    public getName(): string {
        return this.name;
    }

    public getGender(): string {
        return this.gender;
    }

    public getMaritalStatus() {
        return this.maritalStatus;
    }
}

Person.prototype.toString = function toString() {
    return "" + this.name + ", " + this.gender + ", " + this.maritalStatus
}
