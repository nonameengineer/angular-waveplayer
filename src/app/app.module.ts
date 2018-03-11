import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Imports of MDC Angular components
import {
  MdcButtonModule,
  MdcFabModule,
  MdcToolbarModule,
  MdcIconModule,
  MdcElevationModule,
  MdcDrawerModule,
  MdcListModule,
  MdcCardModule,
  MdcTextFieldModule,
  MdcSliderModule
} from '@angular-mdc/web';

// App imports
import { AppComponent } from './app.component';
import { WaveSurferComponent } from './components/wavesurfer/wavesurfer.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistService } from './services/playlist.service';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlayAppComponent } from './containers/play-app/play-app.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: PlaylistComponent,
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WaveSurferComponent,
    PlaylistComponent,
    LoginComponent,
    PageNotFoundComponent,
    PlayAppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    MdcButtonModule,
    MdcFabModule,
    MdcToolbarModule,
    MdcIconModule,
    MdcElevationModule,
    MdcDrawerModule,
    MdcListModule,
    MdcCardModule,
    MdcTextFieldModule,
    MdcSliderModule,
  ],
  providers: [
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
