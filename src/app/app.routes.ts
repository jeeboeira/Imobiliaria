import { Routes } from '@angular/router';
import { CasaComponent } from './casa/casa.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: CasaComponent,
        title: 'Página inicial',
        },
        {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Detalhes da Casa',
    }, 
];
