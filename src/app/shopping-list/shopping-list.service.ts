import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
  ingedientsChanges = new EventEmitter<Ingredient[]>();
  //Defined the typ of ingredients model which I created in folder shared
  private ingredients: Ingredient[] = [
    //Creating the ingredient vis ts class
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingedientsChanges.emit(this.ingredients.slice());
  }
}
