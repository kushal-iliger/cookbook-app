import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { ReciepeListComponent } from '../components/recipes/reciepe-list/reciepe-list.component';
import { ReciepeItemComponent } from '../components/recipes/reciepe-list/reciepe-item/reciepe-item.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../components/shopping-edit/shopping-edit.component';
import { ReciepeDetailComponent } from '../components/recipes/reciepe-detail/reciepe-detail.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';

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
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
