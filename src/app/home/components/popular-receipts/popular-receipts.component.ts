import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'dilvant-popular-receipts',
  templateUrl: './popular-receipts.component.html',
  styleUrl: './popular-receipts.component.scss'
})
export class PopularReceiptsComponent {
  isSmallScreen: boolean = false;

  // Datos necesarios para cada uno de los elementos a mostrar
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
  
  // Para detectar cuando la pantalla es pequeña y realizar cambios en el html
  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.isSmallScreen = (event.target as Window).innerWidth <= 991;
  }

  ngOnInit() {
    this.isSmallScreen = window.innerWidth <= 991;
  }
}
