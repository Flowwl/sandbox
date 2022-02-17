import { FilterChain } from "./FilterChain";
import { Target } from "./filter/Target";
import { Filter } from "./filter/Filter";

export class FilterManager {
    filterChain: FilterChain;

    public constructor(target: Target) {
        this.filterChain = new FilterChain();
        this.filterChain.setTarget(target);
    }

    public setFilter(filter: Filter) {
        this.filterChain.addFilter(filter);
    }

    public filterRequest(request: string) {
        this.filterChain.execute(request);
    }
}
