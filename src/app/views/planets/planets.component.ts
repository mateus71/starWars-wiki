import { Planets } from './../../shared/models/planets.model';
import { PlanetService } from './../../shared/services/planets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: Planets;

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetService.showPlanets().subscribe(result => {
      console.log(result)
      this.planets = result
      console.log(this.planets)
    })
    
  } 

}
