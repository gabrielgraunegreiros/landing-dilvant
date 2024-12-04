import { Component } from '@angular/core';

@Component({
  selector: 'dilvant-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
}
