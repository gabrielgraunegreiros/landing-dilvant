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
      imgPath: 'assets/images/popular-receipts/postre.svg'
    },
    {
      title: 'Causa Rellena',
      imgPath: 'assets/images/popular-receipts/causa.svg'
    },
    {
      title: 'Ají de Gallina',
      imgPath: 'assets/images/popular-receipts/lomo.svg'
    },
    {
      title: 'Pisco Sour',
      imgPath: 'assets/images/popular-receipts/sour.svg'
    },
    {
      title: 'Ceviche',
      imgPath: 'assets/images/popular-receipts/ceviche.svg'
    },
  ];

  constructor() {}
}
