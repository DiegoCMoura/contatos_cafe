import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    MenuLoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports:[
    FooterComponent,
    MenuComponent,
    MenuLoginComponent,
    HomeComponent
  ]
})
export class NavegacaoModule { }
