import { Component, Input } from "@angular/core";
import { Item } from "../models/right-comp.model";


@Component({
    selector: 'right-comp',
    templateUrl: './right.component.html',
    styleUrls: ['./right.component.css']
})

export class RightComponent {
    @Input() item!: Item;
} 