import { Routes } from '@angular/router';
import { ImovelDComponent } from './imovel-d/imovel-d.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'detalhes/:id',
        component: ImovelDComponent
    },
    {
        path: "",
        component: HomeComponent
    }
];
