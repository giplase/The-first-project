import { Component, OnInit, effect } from '@angular/core';
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
    filteredCount = this.filterService.filteredCount;

    constructor(
        private dataService: DataService,
        private filterService: FilterService
    ) {
        effect(() => {
            console.log('Количество отфильтрованных элементов:', this.filteredCount());
        });
    }

    ngOnInit(): void {
        this.items = this.dataService.getItems();

        this.filterService.filterSubject.subscribe(data => {
            this.filteredItems = data;
            console.log('Проведена фильтрация. Отфильтрованные данные:', this.filteredItems);
        });
    }
}