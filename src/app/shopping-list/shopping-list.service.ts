import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
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
  }
}
