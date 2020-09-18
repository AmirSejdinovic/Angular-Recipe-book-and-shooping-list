import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //Creating the new proprety with emiiter and this emitter will not held any info because of that I set this type to void
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  //Creating the onSelected method which will be handling the click on the a element
  //This method will emti the event
  onSelected(){
    this.recipeSelected.emit();
  }

}
