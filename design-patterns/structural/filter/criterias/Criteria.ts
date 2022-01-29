import { Person } from "../Person";

export interface Criteria {
    meetCriteria(persons: Person[]): Person[];
}
