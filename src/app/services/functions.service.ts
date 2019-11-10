import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';



@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private router:Router, private _data:DataService) { }



  ajaxPromise(proxy:string, url:string):any
  {
    return new Promise((resolve, reject)=>
    {
      const req = new XMLHttpRequest();

      req.open('GET', proxy + url);
      req.onload = ()=>
      {
        (req.status === 200)
          ? resolve(JSON.parse(req.responseText).data)
          : reject(req.responseText);
      };
      req.send();
      console.log('ajaxPromise')
    });
  };



  getArtistAndAlbums(input:string, ):void
  {
    this.ajaxPromise(this._data.proxy, this._data.url+input)
      .then((data:any)=>
      {
        const dafaultPic = [
          `https://cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg`,
          `https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg`,
        ];
        const thisDefaultPic = `https://img.hebus.com/hebus_2003/12/30/preview/20031230132531_18.jpg`;

        if(dafaultPic.indexOf(data[0].artist.picture_big) !== -1) data[0].artist.picture_big = thisDefaultPic;
        
        this._data.cache['artist'] = {
          id: data[0].artist.id,
          name: data[0].artist.name,
          image: data[0].artist.picture_big
        }
        let cacheTemp:string[] = [];
        this._data.cache['album'] = [];

        data.forEach((d:any)=>
        {
          if(cacheTemp.indexOf(d['album'].title) === -1)
          {
            cacheTemp.push(d['album'].title);
            this._data.cache['album'].push({
              id: d.album.id,
              title: d.album.title,
              image: d.album.cover_big,
              tracklistUrl: d.album.tracklist
            });
          };
        });
        this.router.navigateByUrl(`/artist/${data[0].artist.name}`)
      })
      .catch((err:any)=>{ console.log(err) });
  };



  getAlbumTracks(index:number):void
  {
    const trackListUrl = this._data.cache['album'][index].tracklistUrl;
    const albumTitle = this._data.cache['album'][index].title.match(/[\w\s\d]/gim).join('');

    this._data.cache['current'].album = index;

    this.ajaxPromise(this._data.proxy, trackListUrl)
      .then((data:any)=>
      {
        let cacheTemp:string[] = [];

        this._data.cache['album'][index].trackList = data.map((d:object)=>
        {
          if(cacheTemp.indexOf(d['title']) === -1)
          {
            cacheTemp.push(d['title']);
            return {
              id: d['id'],
              title: d['title'],
              track: d['preview'],
              duration: d['duration']
            };
          };
        });
        this._data.cache['current'].ready = true;
        this.router.navigateByUrl(`/album/${albumTitle}`);
    })
    .catch((err:any)=>{ console.log(err) });
  };



  getAlbumTracksByAlbumName(title:string):void
  {
    this.ajaxPromise(this._data.proxy, this._data.url + `album:"${title}"`)
      .then((data:any)=>
      {
        const dafaultPic = `https://cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg`;
        const thisDefaultPic = `https://img.hebus.com/hebus_2003/12/30/preview/20031230132531_18.jpg`;

        if(data[0].artist.picture_big === dafaultPic) data[0].artist.picture_big = thisDefaultPic;

        let cacheTemp:string[] = [];
        this._data.cache['album'] = [];
        this._data.cache['current'].album = 0;

        this._data.cache['artist'] = {
          id: data[0].artist.id,
          name: data[0].artist.name,
          image: data[0].artist.picture_big
        };

        this._data.cache['album'].push({
          id: data[0].album.id,
          title: data[0].album.title,
          image: data[0].album.cover_big,
          tracklistUrl: data[0].album.tracklist
        });

        const trackListUrl = this._data.cache['album'][0].tracklistUrl;

        this.ajaxPromise(this._data.proxy, trackListUrl)
          .then((data:any)=>
          {
            this._data.cache['album'][0].trackList = data.map((d:object)=>
            {
              if(cacheTemp.indexOf(d['id']) === -1)
              {
                cacheTemp.push(d['id']);
                return {
                  id: d['id'],
                  title: d['title'],
                  track: d['preview'],
                  duration: d['duration']
                };
              };
            });
            this._data.cache['current'].ready = true;
        })
        .catch((err:any)=>{ console.log(err) });
      })
      .catch((err:any)=>{ console.log(err) });
  };



  setCurrentTrack(url:string):void
  {
    this._data.cache['current'].track = url;
  };

  getCurrentTrack():string
  {
    return this._data.cache['current'].track;
  };

  redirectHome():void
  {
    this.router.navigateByUrl('/');
  }


};
