import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  //Creating proprety which will recive data from input field via localReferenc
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amounInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}
  //Creating custom method
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmo = this.amounInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmo);
    this.slService.addIngredient(newIngredient);
  }
}
