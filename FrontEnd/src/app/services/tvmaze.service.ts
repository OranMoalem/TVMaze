import { TVMazeModel } from './../models/TVMaze.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TVMazeService {

    constructor(private httpClient:HttpClient) { }

    public getTVShows(textToSearch:string):Promise<TVMazeModel[]>{
      const observable=this.httpClient.get<TVMazeModel[]>("https://localhost:44395/api/TVMaze/"+textToSearch);
      return observable.toPromise();
    }
    
  }
  