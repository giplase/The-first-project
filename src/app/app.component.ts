import { Component } from "@angular/core";
import { RandomNumbers } from "./random-button/random-number.service";

      
@Component({
    selector: "my-app",
    providers: [RandomNumbers],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    leftnum: number = 10;
    rightnum: number[] = [0, 10, 0, 0];

    
    constructor(private randomNum1: RandomNumbers){}
       
    randomNum(){
        this.leftnum = this.randomNum1.generateRandomNumbers();
        this.rightnum[0] = this.randomNum1.generateRandomNumbers();
        this.rightnum[1] = this.randomNum1.generateRandomNumbers();
        this.rightnum[2] = this.randomNum1.generateRandomNumbers();
        this.rightnum[3] = this.randomNum1.generateRandomNumbers();
    }
}