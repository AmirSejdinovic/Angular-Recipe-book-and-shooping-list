import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  //Creating proprety which will recive data from input field via localReferenc


  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.slService.starterEditing.subscribe(
      (index: number)=>{
        this.editedItemIndex = index;
         this.editMode = true;
         this.editedItem = this.slService.getIngredient(index);
         this.slForm.setValue({
           name: this.editedItem.name,
           amount: this.editedItem.amount
         })
      }
    );
  }
  //Creating custom method
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
       this.slService.upateIngredient(this.editedItemIndex, newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
    
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredinet(this.editedItemIndex);
    this.onClear();
  }
 

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  

}
