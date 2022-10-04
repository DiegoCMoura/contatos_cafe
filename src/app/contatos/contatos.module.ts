import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContatosRoutingModule } from './contatos.route';

import { ContatosAppComponent } from './contatos.app.component';
import { ListaComponent } from './lista/lista.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { InputFormComponent } from '../shared/input-form/input-form.component';

@NgModule({
  declarations: [
    ContatosAppComponent,
    ListaComponent,
    AdicionarComponent,
    InputFormComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    FormsModule
  ]
})
export class ContatosModule { }
