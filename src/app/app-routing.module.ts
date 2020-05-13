import { FilmComponent } from './views/film/film.component';
import { PeopleComponent } from './views/people/people.component';
import { PlanetsComponent } from './views/planets/planets.component';
import { HomeComponent } from './templates/home/home.component';
import { PlanetsRoutes } from './planets/planets-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "planetas",
      component: PlanetsComponent
    },
    {
      path: "personagens",
      component: PeopleComponent
    },
    {
      path: "filmes",
      component: FilmComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
