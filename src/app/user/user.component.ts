import { Component, Input, Output, EventEmitter} from '@angular/core';
//Input con le I mayuscula es un decorator, input con la i minuscula es una funcion especial
//Recordar que al usar signal inputs tenemos que llamarlos con (). Ej: imagePath()
//Para usar signals, tambien usamos computed usualmente
//Existe la funcion que se puede importar output o el decorator Output para eventos
import { CardComponent } from '../shared/card/card.component';
import { type User } from './user.model';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //El {required: true} y el ! hacer que typescript nos marque el error si le asignamos un valor a la variable
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  ////////////////////////
  //Es mejor ponerlo como objeto
  @Input({required: true}) user!: User;
  @Input ({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  ///////////////
  //Para eventos con output que realmente es lo mismo que usar el decorator Output, output no genera ningun tipo de signal
  // select = output<string>();
  ///////////////////////////////////////
  //SIGNAL
  //El .required hace que nos diga que asignemos un valor
  // avatar = input.required<string>();
  // name = input.required<string>();



  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // }); 

  

  get imagePath(){
    return 'assets/users/'+ this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }


}
