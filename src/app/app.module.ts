import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { ReciepeListComponent } from '../components/recipes/reciepe-list/reciepe-list.component';
import { ReciepeItemComponent } from '../components/recipes/reciepe-list/reciepe-item/reciepe-item.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../components/shopping-edit/shopping-edit.component';
import { ReciepeDetailComponent } from '../components/recipes/reciepe-detail/reciepe-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from '../components/shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from '../components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../components/recipes/recipe-edit/recipe-edit.component';
import { ReciepeSercive } from '../components/recipes/recipe.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ReciepeListComponent,
    ReciepeItemComponent,
    ReciepeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, ReciepeSercive],
  bootstrap: [AppComponent]
})
export class AppModule { }
