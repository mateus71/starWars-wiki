import { Planets } from './../models/planets.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'  
})


export class PlanetService {

    constructor( private http: HttpClient
    
    ){}

    showPlanets(): Observable<Planets> {

        return this.http.get<Planets>("http://swapi.dev/api/planets/3/") 

    }

}