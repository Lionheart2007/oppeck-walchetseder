import { Component, Input } from '@angular/core';
import { ImagePanelComponent } from '../image-panel/image-panel.component';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [ImagePanelComponent],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css',
})
export class ImageListComponent {
  @Input() images: { src: string; alt: string }[] = [];
}
