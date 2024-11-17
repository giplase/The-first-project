import { Component, Input } from "@angular/core";
      
@Component({
    selector: 'left-comp',
    templateUrl: './left.component.html',
    styleUrls: ['./left.component.css']
})
export class LeftComponent {
    @Input() leftnum!: number;
}