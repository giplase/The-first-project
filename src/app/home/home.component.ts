import { Component, OnInit } from '@angular/core';
import { Item } from '../models/right-comp.model';
import { DataService } from '../data/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    leftnum: number = 10;
    items: Item[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.items = this.dataService.getItems();
    }
}