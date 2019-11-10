import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';



@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {

  constructor(private _function:FunctionsService) {}


  search(event:any)
  {
    event.preventDefault();

    const input = (<HTMLInputElement>document.querySelector('#inputSearch')).value;
    this._function.getArtistAndAlbums(input);
  }

}
