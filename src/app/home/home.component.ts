import { Component, OnInit } from '@angular/core';
import { Item } from '../models/right-comp.model';
import { DataService } from '../data/data.service';
import { FilterService } from '../filter/filter.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    leftnum: number = 10;
    items: Item[] = [];
    filteredItems: any[] = [];

    constructor(
        private dataService: DataService,
        private filterService: FilterService
      ) {}

    ngOnInit(): void {
        this.items = this.dataService.getItems();

        this.filterService.getFilteredData().subscribe(data => {
            this.filteredItems = data;
            console.log('Проведена фильтрация. Отфильтрованные данные:', this.filteredItems);
        });
    }
}