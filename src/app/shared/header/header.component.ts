import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'dilvant-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isSmallScreen: boolean = false;

  // Datos necesarios para cada uno de los elementos a mostrar
  routesResponse = [
    {
      id: 1,
      title: 'Inicio',
      route: '/home',
      type: 'aType'
    },
    {
      id: 2,
      title: 'Menú',
      route: '*',
      type: 'aType'
    },
    {
      id: 3,
      title: 'Nosotros',
      route: '*',
      type: 'aType'
    },
    {
      id: 4,
      title: 'Reservas',
      route: '*',
      type: 'dropdown'
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
