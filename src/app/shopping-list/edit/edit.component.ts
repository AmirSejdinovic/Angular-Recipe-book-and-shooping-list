import { Component, OnDestroy, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  //Creating proprety which will recive data from input field via localReferenc


  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.slService.starterEditing.subscribe(
      (index: number)=>{
        this.editedItemIndex = index;
         this.editMode = true;
      }
    );
  }
  //Creating custom method
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
