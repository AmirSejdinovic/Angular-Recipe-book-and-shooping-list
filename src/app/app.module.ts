import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditComponent } from './shopping-list/edit/edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    EditComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  exports: [HeaderComponent],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
