import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
  isSingle: boolean;
  avatar: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' esta es mi primera clase';
  motos = ["AKT","SUZUKI","KAWAZAKI","YAMAHA"];

  items: User [] = [
    {
      name: 'Alejandro',
      age: 29,
      isSingle: true,
      avatar: 'assets/images/balon.jpg',
      
      
    },
    {
      name: 'Lino',
      age: 65,
      isSingle: false,
      avatar: 'assets/images/jugador.jpg',
    }
  ];
  motosMarca = " ";


  changeTitle() {
    this.title='Este titulo es de prueba';
  }
  
  addMotos () {
    this.motos.push(this.motosMarca) ;
    this.motosMarca = "";
  }
  empty(){
    this.motos=[];
  }

  deleteItem (index: number){
    this.motos.splice(index,1);
  }

  updateItem(index: number){
    this.motos[index] = 'Se cambio';
  }

}

