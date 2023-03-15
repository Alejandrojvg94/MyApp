import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      title: 'producto 1',
      image: 'assets/images/balon.jpg',
      precio: 20,
      texto: 'bla bla ',
    },
    {
      id: 2,
      title: 'producto 1',
      image: 'assets/images/jugador.jpg',
      precio: 20,
      texto: '0',
    
    },
    {
      id: 3,
      title: 'producto 1',
      image: 'assets/images/porteria.jpg',
      precio: 20,
      texto: '0',

    }
    

  ];
  constructor() { }

  ngOnInit() {
  }
  onClickedProduct(id: number){
    console.log('clicked', id);
  }
}
