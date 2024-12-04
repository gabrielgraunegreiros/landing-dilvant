import { Component } from '@angular/core';

@Component({
  selector: 'dilvant-popular-receipts',
  templateUrl: './popular-receipts.component.html',
  styleUrl: './popular-receipts.component.scss'
})
export class PopularReceiptsComponent {
  receiptsResponse = [
    {
      title: 'Postres peruanos',
      imgPath: 'assets/images/postre.svg'
    },
    {
      title: 'Causa Rellena',
      imgPath: 'assets/images/causa.svg'
    },
    {
      title: 'Ají de Gallina',
      imgPath: 'assets/images/lomo.svg'
    },
    {
      title: 'Pisco Sour',
      imgPath: 'assets/images/sour.svg'
    },
    {
      title: 'Ceviche',
      imgPath: 'assets/images/ceviche.svg'
    },
  ];

  constructor() {}
}
