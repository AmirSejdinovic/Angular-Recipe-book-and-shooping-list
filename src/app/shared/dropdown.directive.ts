//Importing directive decorative
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
//Caling directive
@Directive({
  selector: '[appDropdown]',
})

//Creating and exporting ts class
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  //Listening the click
  @HostListener('click') toogleOpen() {
    this.isOpen = !this.isOpen;
  }
}
