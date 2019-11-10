import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';



@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent
{
  trackUrl:string;
  audioNode:any;

  constructor(private _function:FunctionsService) { }


  getCurrentTrack():void
  {
    const track = this._function.getCurrentTrack();
    this.audioNode = (<HTMLAudioElement>document.querySelector('audio'));

    if(track){
      this.audioNode.setAttribute('src', track);
      this.audioNode.load();
    }
  }

}
