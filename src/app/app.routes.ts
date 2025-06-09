import { Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { BehandlungenComponent } from './pages/behandlungen/behandlungen.component';
import { TreatmentComponent } from './common/treatment/treatment.component';
import { TeamComponent } from './pages/team/team.component';
import { MemberComponent } from './pages/team/member/member.component';

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'galerie', component: GalerieComponent },
  {
    path: 'behandlungen',
    children: [
      { path: '', component: BehandlungenComponent },
      { path: ':id', component: TreatmentComponent },
    ],
  },
  {
    path: 'team',
    children: [
      { path: '', component: TeamComponent },
      { path: ':id', component: MemberComponent },
    ],
  },
];
