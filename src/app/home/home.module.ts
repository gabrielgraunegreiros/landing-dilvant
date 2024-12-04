import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMenuComponent } from './components/new-menu/new-menu.component';
import { HomeComponent } from './home.component';
import { PopularReceiptsComponent } from './components/popular-receipts/popular-receipts.component';
import { MatIconModule } from '@angular/material/icon';
import { SeasonDishComponent } from './components/season-dish/season-dish.component';
import { SharedModule } from '../shared/shared.module';
import { FavoriteDishComponent } from './components/favorite-dish/favorite-dish.component';
import { UniqueExperienceComponent } from './components/unique-experience/unique-experience.component';
import { BookTodayComponent } from './components/book-today/book-today.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HomeComponent,
    NewMenuComponent,
    PopularReceiptsComponent,
    SeasonDishComponent,
    FavoriteDishComponent,
    UniqueExperienceComponent,
    BookTodayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    NgbCarouselModule
  ],
  exports: [
    HomeComponent,
    NewMenuComponent,
    PopularReceiptsComponent,
    SeasonDishComponent,
    FavoriteDishComponent,
    BookTodayComponent
  ]
})
export class HomeModule { }
