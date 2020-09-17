import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})

export class HeaderComponent {

   //Creating the proprety which I will emit via EventEmitter method
   //Inside the EventEmitter i defined that it will emit the string type
   @Output() featureSelected = new EventEmitter<string>();

    //Creating the onSelect method which will held all the logic
    onSelect(feature: string){
      //Passing the custom propreti tu emiter
      this.featureSelected.emit(feature);


    }
}