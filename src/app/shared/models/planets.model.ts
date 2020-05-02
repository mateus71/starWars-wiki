import { Film } from './film.model';
import { People } from './people.model';

export class Planets{
    constructor(
        public name: string,
        public rotation_period: string,
        public orbital_period: string,
        public diameter: string,
        public climate: string,
        public gravity: string,
        public terrain: string,
        public surface_water: string,
        public population: string,
        public residents: People[], 
        public films: Film[] ){}


}