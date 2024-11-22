import { NgModule }      from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { LeftComponent } from "./left-component/left.component";
import { RightComponent } from "./right-component/right.component";
import { RightItem } from "./right-item/right-item.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { FilterComponent } from "./filter/filter.component";

 
@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule, 
                    AppRoutingModule ],

    declarations: [ AppComponent, 
                    LeftComponent,
                    RightComponent,
                    RightItem,
                    HomeComponent,
                    FilterComponent ],

    providers: [],
    
    bootstrap:    [ AppComponent ]
})
export class AppModule { }