import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
    InfoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    InfoComponent,
    FooterComponent
  ]
})
export class SharedModule { }
