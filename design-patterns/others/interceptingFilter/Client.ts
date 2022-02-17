import { FilterManager } from "./FilterManager";

export class Client {
    filterManager: FilterManager;

    public setFilterManager(filterManager: FilterManager) {
        this.filterManager = filterManager;
    }

    public sendRequest(request: string) {
        this.filterManager.filterRequest(request);
    }
}
