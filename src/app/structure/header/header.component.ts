import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  entries: { text: string; path: string[] }[] = [
    { text: 'Über Uns', path: ['/'] },
    { text: 'Behandlungen', path: ['/', 'behandlungen'] },
    { text: 'Team', path: ['/', 'team'] },
    { text: 'Galerie', path: ['/', 'galerie'] },
    { text: 'Kontakt', path: ['/', 'kontakt'] },
  ];

  constructor(private router: Router) {}

  get active() {
    return this.router.url.split('/')[1];
  }

  navigate(path: string[]) {
    this.router.navigate(path);
  }
}
