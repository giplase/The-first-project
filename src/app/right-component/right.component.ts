import { Component, Input } from "@angular/core";
      
@Component({
    selector: 'right-comp',
    templateUrl: './right.component.html',
    styleUrls: ['./right.component.css']
})
export class RightComponent {
    @Input() name: string = '';
    @Input() rightnum!: number;

}