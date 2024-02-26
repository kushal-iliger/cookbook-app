import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Banana', 5),
    new Ingredient('Apple', 7)
  ];

  constructor() { }
  ngOnInit(): void {

  }
}
