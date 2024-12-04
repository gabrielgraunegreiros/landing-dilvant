import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'dilvant-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  isSmallScreen: boolean = false;
  
  // Datos necesarios para cada uno de los elementos a mostrar
  footerInfo = [
    {
      title: 'Platos Estrellas',
      elements: [
        'Ceviche',
        'Lomo Saltado',
        'Causa Rellena'
      ]
    },
    {
      title: 'Contacto',
      elements: [
        '+51 999 999 999',
        'dilvant.restaurante@gmail.com',
      ]
    },
    {
      title: 'Encuéntranos',
      elements: [
        'Av. Dirección 1'
      ]
    },
  ];

  // Para detectar cuando la pantalla es pequeña y realizar cambios en el html
  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.isSmallScreen = (event.target as Window).innerWidth <= 991;
  }

  ngOnInit() {
    this.isSmallScreen = window.innerWidth <= 991;
  }
}
