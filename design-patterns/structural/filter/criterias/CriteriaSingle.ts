import { Criteria } from "./Criteria";
import { Person } from "../Person";

export class CriteriaSingle implements Criteria {
    meetCriteria(persons: Person[]): Person[] {
        const singlePersons: Person[] = [];

        for (let person of persons) {
            if(person.getMaritalStatus() === "Single"){
                singlePersons.push(person);
            }
        }
        return singlePersons;
    }
}
