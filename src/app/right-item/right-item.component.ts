import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Item } from "../models/right-comp.model";
import { DataService } from "../data/data.service";
  
@Component({
    selector: 'right-item',
    templateUrl: './right-item.component.html',
    styleUrls: ['./right-item.component.css']
})
export class RightItem implements OnInit { 
    item: Item | undefined;

    constructor(
        private activateRoute: ActivatedRoute,
        private dataService: DataService
    ) {}

    ngOnInit(): void {
        this.activateRoute.params.subscribe(params => {
            const id = +params['id']; 
            this.item = this.dataService.getItemById(id); 
        });
    }
}