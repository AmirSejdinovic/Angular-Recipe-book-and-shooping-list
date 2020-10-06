import { Component, OnInit } from '@angular/core';
//Importing the custom ts class for ingerdinets
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  //Defined the typ of ingredients model which I created in folder shared
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingedientsChanges.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
}
