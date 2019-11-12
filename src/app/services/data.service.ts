import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cache:object;
  proxy:string;
  url:string;

  constructor()
  {
    this.cache = {
      artist: '',
      album: [],
      current: {
        album: '',
        track: '',
        ready: false,
      }
    };
    // this.proxy = `http://34.244.31.95:3000/`;
    this.proxy = `https://cors-anywhere.herokuapp.com/`;
    this.url   = `https://api.deezer.com/search?q=`;
  };
}
