import { Component, OnInit } from '@angular/core';
//Importing the Recipe class
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //This will be array of recipes, and it is now empty. It will be filed with array methods
  //I here defined that proprety will be use the Recipe model 
  recipes: Recipe[] = [
    //Creating new Recipe based on our blueprint eg Recipe class
    new Recipe('A test Recipe','This is a test','https://p0.pikist.com/photos/202/820/gastronomy-food-dishes-eat-recipe-lunch.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
