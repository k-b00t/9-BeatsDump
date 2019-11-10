import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewArtistComponent } from './view-artist/view-artist.component';
import { ViewAlbumComponent } from './view-album/view-album.component';


const routes: Routes = [
  {path: '', component: ViewHomeComponent},
  {path: 'home', component: ViewHomeComponent},
  {path: 'artist/:id', component: ViewArtistComponent},
  {path: 'album/:id', component:ViewAlbumComponent },
  {path: '*', component: ViewHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
