import { Component } from "@angular/core";
import { FilterService } from "./filter.service";
import { Item } from '../models/right-comp.model';
import { Items } from "../data/items.mock";


@Component({
    selector: 'filter-comp',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})

export class FilterComponent{
    dateFilterValue: string | undefined = undefined;
    items: Item[] = Items;
    dateFilter = false;
    nameFilter = false;
    selectedItemName: string | undefined = undefined;
    filteredItems: Item[] = [];

    constructor(private filterService: FilterService) {}

    dateInputVisibility() {
        this.dateFilter =!this.dateFilter;
        this.dateFilterValue = undefined;
    }

    nameInputVisibility() {
        this.nameFilter =!this.nameFilter;
        this.selectedItemName = undefined;
    }

    onSelectedItem(name: string) {
        this.selectedItemName = name;
    }

    applyFilter() {
        this.filterService.setFilterData(this.items, {
            date: this.dateFilterValue,
            name: this.selectedItemName
        });
    }
}