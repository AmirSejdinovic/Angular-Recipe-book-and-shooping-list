import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //This will be array of recipes, and it is now empty. It will be filed with array methods
  recipes = [];

  constructor() { }

  ngOnInit(): void {
  }

}
