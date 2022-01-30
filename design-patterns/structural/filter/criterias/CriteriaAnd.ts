import { Criteria } from "./Criteria";
import { Person } from "../Person";

export class CriteriaAnd implements Criteria {
    private criteria: Criteria;
    private otherCriteria: Criteria;

    public constructor(criteria: Criteria, otherCriteria: Criteria) {
        this.criteria = criteria;
        this.otherCriteria = otherCriteria;
    }

    meetCriteria(persons: Person[]): Person[] {
        const firstCriteriaItems = this.criteria.meetCriteria(persons);
        return this.otherCriteria.meetCriteria(firstCriteriaItems);
    }
}
