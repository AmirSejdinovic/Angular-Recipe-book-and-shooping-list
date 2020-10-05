import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//Importing the Recipe class
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  //Emitter
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  //This will be array of recipes, and it is now empty. It will be filed with array methods
  //I here defined that proprety will be use the Recipe model
  recipes: Recipe[] = [];
  //This is typescript shortcut to insant asigne the proprety with same name
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  //Creating method which will emit the data to another component
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
