import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMenuComponent } from './components/new-menu/new-menu.component';
import { HomeComponent } from './home.component';
import { PopularReceiptsComponent } from './components/popular-receipts/popular-receipts.component';
import { MatIconModule } from '@angular/material/icon';
import { SeasonDishComponent } from './components/season-dish/season-dish.component';



@NgModule({
  declarations: [
    HomeComponent,
    NewMenuComponent,
    PopularReceiptsComponent,
    SeasonDishComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HomeComponent,
    NewMenuComponent,
    PopularReceiptsComponent,
    SeasonDishComponent
  ]
})
export class HomeModule { }
