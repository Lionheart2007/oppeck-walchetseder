import { Component } from '@angular/core';
import team from './team';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  public team = team;
}
