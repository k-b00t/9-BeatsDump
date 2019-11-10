import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.css']
})
export class AlbumInfoComponent
{
  constructor(public _data:DataService) { }
}
