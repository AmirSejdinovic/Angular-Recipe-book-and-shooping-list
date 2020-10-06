import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
//Creating the typescript class whicl will be our service
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    //Creating new Recipe based on our blueprint eg Recipe class
    new Recipe(
      'A test Recipe',
      'This is a test',
      'https://p0.pikist.com/photos/202/820/gastronomy-food-dishes-eat-recipe-lunch.jpg',
      [new Ingredient('Meet', 1), new Ingredient('Fries', 21)]
    ),
    new Recipe(
      'Novi recept',
      'Opis recepta',
      'https://townsquare.media/site/959/files/2020/06/GettyImages-614515684.jpg?w=980&q=75',
      [new Ingredient('Bunst', 1), new Ingredient('Meet', 21)]
    ),
  ];
  //Creating the metod
  getRecipes() {
    //Return the array above. This will return the new array. Slice method will return the copy of array above and nobody can directly access to this above array
    return this.recipes.slice();
  }
}
