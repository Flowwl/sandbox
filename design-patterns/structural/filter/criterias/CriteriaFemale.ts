import { Criteria } from "./Criteria";
import { Person } from "../Person";

export class CriteriaFemale implements Criteria {
    meetCriteria(persons: Person[]): Person[] {
        const femalePersons: Person[] = [];

        for (let person of persons) {
            if(person.getGender() === "Female"){
                femalePersons.push(person);
            }
        }
        return femalePersons;
    }
}
