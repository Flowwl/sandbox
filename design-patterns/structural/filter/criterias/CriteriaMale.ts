import { Criteria } from "./Criteria";
import { Person } from "../Person";

export class CriteriaMale implements Criteria {
    meetCriteria(persons: Person[]): Person[] {
        const malePersons: Person[] = [];

        for (let person of persons) {
            if(person.getGender() === "Male"){
                malePersons.push(person);
            }
        }
        return malePersons;
    }
}
