import { Criteria } from "./Criteria";
import { Person } from "../Person";

export class CriteriaOr implements Criteria {
    private criteria: Criteria;
    private otherCriteria: Criteria;

    public constructor(criteria: Criteria, otherCriteria: Criteria) {
    this.criteria = criteria;
    this.otherCriteria = otherCriteria;
}

    meetCriteria(persons: Person[]): Person[] {
        const firstCriteriaItems = this.criteria.meetCriteria(persons);
        const otherCriteriaItems = this.otherCriteria.meetCriteria(persons);

        for (const person of otherCriteriaItems) {
            if(!firstCriteriaItems.includes(person)){
                firstCriteriaItems.push(person);
            }
        }
        return firstCriteriaItems;
    }
}
