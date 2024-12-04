import { Component } from '@angular/core';

@Component({
  selector: 'dilvant-favorite-dish',
  templateUrl: './favorite-dish.component.html',
  styleUrl: './favorite-dish.component.scss'
})
export class FavoriteDishComponent {
  // Datos necesarios para cada uno de los elementos a mostrar
  favoriteDishesResponse = [
    {
      description: 'Ofrecemos platos que combinan tradición y modernidad, diseñados para deleitar tu paladar.',
      imgPath: 'assets/images/favorite-dishes/favorite1.svg'
    },
    {
      description: 'Disfruta de un ambiente acogedor mientras degustas nuestros sabrosos platos.',
      imgPath: 'assets/images/favorite-dishes/favorite2.svg'
    },
    {
      description: 'La excelencia de la cocina peruana se refleja en nuestros platos.',
      imgPath: 'assets/images/favorite-dishes/favorite3.svg'
    },
  ];
}
