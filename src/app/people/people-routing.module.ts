import { Routes } from '@angular/router';
import { ListPeopleComponent } from './list-people/list-people.component';

export const PlanetsRoutes: Routes = [
    {
        path: 'people',
        redirectTo: 'people/list'
    },
    {
        path: 'people/list',
        component: ListPeopleComponent
    },

];