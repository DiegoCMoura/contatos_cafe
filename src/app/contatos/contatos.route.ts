import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosAppComponent } from './contatos.app.component';
import { ListaComponent } from './lista/lista.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

const contatosRouterConfig: Routes = [
    {
        path: '', component: ContatosAppComponent,
        children: [
            {
                path: 'lista', component: ListaComponent
            },
            {
                path: 'adicionar', component: AdicionarComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contatosRouterConfig)
    ],
    exports: [RouterModule]
})
export class ContatosRoutingModule { }