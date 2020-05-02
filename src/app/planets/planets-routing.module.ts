import { Routes } from '@angular/router';
import { ListPlanetsComponent } from './list-planets/list-planets.component';

export const PlanetsRoutes: Routes = [
    {
        path: 'planets',
        redirectTo: 'planets/list'
    },
    {
        path: 'planets/list',
        component: ListPlanetsComponent
    },

];