import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FunctionsService } from 'src/app/services/functions.service';



@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent
{
  constructor(public _data:DataService, private _function:FunctionsService)
  {
    this._data.cache['current'].track = null;
  }

  setCurrentTrack(url:string):void
  {
    this._function.setCurrentTrack(url);
  }

  getDurationTrak(duration:number)
  {
    const minutes:string = Math.floor(duration/60).toString();
    let seconds:string = Math.round(duration%60).toString();

    if(seconds.length < 2) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  }

}
