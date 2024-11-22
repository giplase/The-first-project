import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class FilterService {
    private filterSubject = new BehaviorSubject<any[]>([]);
    filterData: any[] = [];

    constructor() {}

    setFilterData(data: any[], filters: { date?: string; name?: string }) {
        this.filterData = data;

        const filtered = data.filter(item => {
            let matches = true;

            if (filters.date) {
                const filterDate = new Date(filters.date);
                const itemDate = new Date(item.date);
                matches = matches && itemDate >= filterDate;
            }

            if (filters.name) {
                matches = matches && filters.name == item.name;
            }

            return matches;
        });

        this.filterSubject.next(filtered);
    }

    getFilteredData() {
        return this.filterSubject.asObservable();
    }

}