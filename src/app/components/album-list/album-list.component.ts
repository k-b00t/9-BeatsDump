import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FunctionsService } from 'src/app/services/functions.service';



@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent
{
  constructor(public _data:DataService, private _function:FunctionsService) { }

  getAlbumTracks(index:number):void
  {
    this._function.getAlbumTracks(index);
  }

}
