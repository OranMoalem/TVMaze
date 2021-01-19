import { TVMazeModel } from './../../models/TVMaze.model';
import { TVMazeService } from './../../services/tvmaze.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent  {
    public tvShows : TVMazeModel[];
    public textToSearch:string;
  constructor(public tvMazeService :TVMazeService) { }

public async startSearch() {
    try {
        this.tvShows = await this.tvMazeService.getTVShows(this.textToSearch);
        
        }
        catch(err) {
            alert(err.message);
        }
 
   }

}
