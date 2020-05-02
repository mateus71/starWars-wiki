import { Planets } from './planets.model';
import { People } from './people.model';

export class Film {
    constructor(
        public tile: string,
        public episode_id: string,
        public opening_crawl: string,
        public director: string,
        public producer: string,
        public release_date: string,
        public people: People[],
        public planets: Planets[]
        
       
    ){}

}