import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
export class ShoppingListService{
  ingredientsChanged =  new EventEmitter<Ingredient[]>(); 
  private ingredients: Ingredient[] = [
    //Creating the ingredient vis ts class
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',3)

  ];

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient){
       this.ingredients.push(ingredient);
       this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
       this.ingredients.push(...ingredients);
       this.ingredientsChanged.emit(this.ingredients.slice());
  }
}