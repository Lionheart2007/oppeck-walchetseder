import { Component } from '@angular/core';
import { TreatmentComponent } from '../../common/treatment/treatment.component';
import treatments from './behandlungen.json';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-behandlungen',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './behandlungen.component.html',
  styleUrl: './behandlungen.component.css',
})
export class BehandlungenComponent {
  public treatments = treatments;
  public current: number | undefined = undefined;
}
