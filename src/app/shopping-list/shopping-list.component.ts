import { Component, OnInit } from '@angular/core';
//Importing the custom ts class for ingerdinets
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  //Defined the typ of ingredients model which I created in folder shared
  ingredients: Ingredient[] = [
    //Creating the ingredient vis ts class
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',3)

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
