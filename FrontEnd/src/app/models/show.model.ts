import { ImageModel } from './image.model';
import { RatingModel } from './rating.model';
export class ShowModel {
    public constructor(
        public id:number,
        public url:string,
        public rating:RatingModel,
        public image:ImageModel,
        public name:string,
        public officialSite:string,
        ){}
    
}