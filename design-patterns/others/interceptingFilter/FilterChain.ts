import { Filter } from "./filter/Filter";
import { Target } from "./filter/Target";

export class FilterChain {
    private filters: Filter[] = [];
    private target: Target;

    public addFilter(filter: Filter) {
        this.filters.push(filter);
    }

    public execute(request: string) {
        for (let filter of this.filters) {
            filter.execute(request);
        }
        this.target.execute(request);
    }

    public setTarget(target: Target) {
        this.target = target;
    }
}
