import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumInfoComponent } from './components/album-info/album-info.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';

import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewArtistComponent } from './view-artist/view-artist.component';
import { ViewAlbumComponent } from './view-album/view-album.component';

import { DataService } from './services/data.service';
import { FunctionsService } from './services/functions.service';




@NgModule({
  declarations: [
    AppComponent,
    ViewHomeComponent,
    ViewArtistComponent,
    ViewAlbumComponent,
    NavBarComponent,
    CarrouselComponent,
    FooterComponent,
    AlbumListComponent,
    AlbumInfoComponent,
    ArtistProfileComponent,
    TrackListComponent,
    MusicPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    FunctionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
