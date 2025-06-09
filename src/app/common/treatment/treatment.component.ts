import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import treatments from '../../pages/behandlungen/behandlungen.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-treatment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './treatment.component.html',
  styleUrl: './treatment.component.css',
})
export class TreatmentComponent {
  constructor(private route: ActivatedRoute) {}
  public treatment: any = undefined;

  ngOnInit() {
    // Method 1: subscribe to paramMap observable
    this.route.paramMap.subscribe((params) => {
      this.treatment = treatments[Number(params.get('id'))];
    });
  }
}
