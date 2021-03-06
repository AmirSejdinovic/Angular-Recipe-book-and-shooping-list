import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
  ingedientsChanges = new EventEmitter<Ingredient[]>();
  //Defined the typ of ingredients model which I created in folder shared
  starterEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    //Creating the ingredient vis ts class
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }


  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingedientsChanges.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingedientsChanges.emit(this.ingredients.slice());
  }

  upateIngredient(index: number, newIngredinet: Ingredient){
     this.ingredients[index] = newIngredinet;
     this.ingedientsChanges.next(this.ingredients.slice());
  }

  deleteIngredinet(index: number){
     this.ingredients.splice(index, 1);
     this.ingedientsChanges.next(this.ingredients.slice());
  }
}
