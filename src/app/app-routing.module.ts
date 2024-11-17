import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RightItem } from './right-item/right-item.component';
import { HomeComponent } from './home/home.component';
 

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'item/:id', component: RightItem },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}