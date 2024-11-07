import { NgModule }      from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { LeftComponent } from "./left-component/left.component";
import { RightComponent } from "./right-component/right.component";
 
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, 
                    LeftComponent,
                    RightComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }