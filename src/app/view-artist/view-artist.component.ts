import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionsService } from '../services/functions.service';



@Component({
  selector: 'app-view-artist',
  templateUrl: './view-artist.component.html',
  styleUrls: ['./view-artist.component.css']
})
export class ViewArtistComponent
{
  queryString:string;

  constructor(public _data:DataService, private _function:FunctionsService, private router:Router, private _path:ActivatedRoute) {
    this.queryString = this._path.snapshot.params.id.toUpperCase();

    if(this.queryString) {
      this._function.getArtistAndAlbums( this.queryString );
    } else {
      this.router.navigateByUrl('');
    };
  };

}
