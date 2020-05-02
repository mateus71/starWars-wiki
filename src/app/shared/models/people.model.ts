import { Film } from './film.model';
import { Planets } from './planets.model';

export class People {
    constructor(
        public name: string,
        public height: string,
        public mass: string,
        public hair_color: string,
        public skin_color: string,
        public birth_year: string,
        public gender: string,
        public homeworld: Planets[],
        public films: Film[]

    ){}
}