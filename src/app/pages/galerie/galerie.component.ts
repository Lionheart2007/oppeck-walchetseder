import { Component } from '@angular/core';
import { ImagePanelComponent } from '../../common/images/image-panel/image-panel.component';
import { ImageListComponent } from '../../common/images/image-list/image-list.component';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [ImagePanelComponent, ImageListComponent],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css',
})
export class GalerieComponent {
  categories = [
    {
      title: 'Ordination',
      images: [
        { src: 'assets/images/ordination1.webp', alt: 'Ordination 1' },
        { src: 'assets/images/ordination2.webp', alt: 'Ordination 2' },
        { src: 'assets/images/ordination3.webp', alt: 'Ordination 3' },
        { src: 'assets/images/ordination4.webp', alt: 'Ordination 4' },
        { src: 'assets/images/ordination5.webp', alt: 'Ordination 5' },
      ],
    },
    {
      title: 'Endoskopie',
      images: [
        { src: 'assets/images/endoskopie1.webp', alt: 'Endoskopie 1' },
        { src: 'assets/images/endoskopie2.webp', alt: 'Endoskopie 2' },
        { src: 'assets/images/endoskopie3.webp', alt: 'Endoskopie 3' },
        { src: 'assets/images/endoskopie4.webp', alt: 'Endoskopie 4' },
        { src: 'assets/images/endoskopie5.webp', alt: 'Endoskopie 5' },
        { src: 'assets/images/endoskopie6.webp', alt: 'Endoskopie 6' },
      ],
    },
    {
      title: 'Ultraschall',
      images: [
        { src: 'assets/images/ultraschall1.webp', alt: 'Ultraschall 1' },
        { src: 'assets/images/ultraschall2.webp', alt: 'Ultraschall 2' },
      ],
    },
    {
      title: 'Ergometrie',
      images: [
        { src: 'assets/images/ergometrie1.webp', alt: 'Ergometrie 1' },
        { src: 'assets/images/ergometrie2.webp', alt: 'Ergometrie 2' },
      ],
    },
    {
      title: 'Labor',
      images: [
        { src: 'assets/images/labor1.webp', alt: 'Labor 1' },
        { src: 'assets/images/labor2.webp', alt: 'Labor 2' },
      ],
    },
  ];
}
