import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//Importing the custom ts class for ingerdinets
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private igChangeSub: Subscription;
  //Defined the typ of ingredients model which I created in folder shared
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingedientsChanges.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  onEditItem(index: number){
    this.slService.starterEditing.next(index);
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }
}
