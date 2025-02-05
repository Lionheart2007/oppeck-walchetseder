import { Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { GalerieComponent } from './pages/galerie/galerie.component';

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'galerie', component: GalerieComponent },
];
