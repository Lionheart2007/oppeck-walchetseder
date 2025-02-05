import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-panel',
  standalone: true,
  imports: [],
  templateUrl: './image-panel.component.html',
  styleUrl: './image-panel.component.css',
})
export class ImagePanelComponent {
  @Input() src: string | undefined;
  @Input() alt: string | undefined;
}
