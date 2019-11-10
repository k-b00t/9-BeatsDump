import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent
{
  constructor(private _function:FunctionsService) { }

  search(event:any)
  {
    event.preventDefault();

    const input = (<HTMLInputElement>document.querySelector('#inputSearch')).value;
    (<HTMLInputElement>document.querySelector('#inputSearch')).value = '';

    this._function.getArtistAndAlbums(input);
  }

  redirectHome():void
  {
    this._function.redirectHome();
  }

}
