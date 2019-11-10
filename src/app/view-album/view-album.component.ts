import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { FunctionsService } from '../services/functions.service';



@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.css']
})
export class ViewAlbumComponent
{
  queryString:string;
  albumTitleCurrent:string;

  constructor(public _data:DataService, private _function:FunctionsService, private router:Router, private _path:ActivatedRoute)
  {
    this.queryString = this._path.snapshot.params.id.toUpperCase();

    if(this.queryString) {
      if(this._data.cache[`album`].length === 0)
      {
        this._data.cache['current'].ready = false;
        this._function.getAlbumTracksByAlbumName( this.queryString );
      }
      else if(this._data.cache[`album`][_data.cache['current'].album].title.toUpperCase().match(/[\w\s\d]/gim).join('') != this.queryString)
      {
        this._data.cache['current'].ready = false;
        this._function.getAlbumTracksByAlbumName( this.queryString );
      };
    } else {
      this.router.navigateByUrl('');
    };
    window.scrollTo(0,0)
  }

  getterView():void
  {
    return  this._data.cache['current'].ready;
  }
}
