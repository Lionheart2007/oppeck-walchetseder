import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  entries: { text: string; path: string[] }[] = [
    { text: 'Start', path: ['/'] },
    { text: 'Behandlungen', path: ['/', 'behandlungen'] },
    { text: 'Team', path: ['/', 'team'] },
    { text: 'Galerie', path: ['/', 'galerie'] },
    { text: 'Kontakt', path: ['/', 'kontakt'] },
  ];
}
