import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrl: './reciepe-list.component.css'
})
export class ReciepeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test1', 'Testing1', 'https://firebasestorage.googleapis.com/v0/b/portfolio-kushal-ij.appspot.com/o/prateek-katyal-xv7-GlvBLFw-unsplash.jpg?alt=media&token=8406ed62-2385-43dc-8210-0d1e32d28994'),
    new Recipe('Test2', 'Testing2', 'https://firebasestorage.googleapis.com/v0/b/portfolio-kushal-ij.appspot.com/o/prateek-katyal-xv7-GlvBLFw-unsplash.jpg?alt=media&token=8406ed62-2385-43dc-8210-0d1e32d28994')
  ];

  constructor() { }
  ngOnInit(): void {

  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
