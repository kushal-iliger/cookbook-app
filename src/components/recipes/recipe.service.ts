import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../../app/shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class ReciepeSercive {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Pizza',
            'Doner Pizza',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-kushal-ij.appspot.com/o/Pizza_(22).jpg?alt=media&token=4ac8e094-4782-4338-b4fb-1afdb5b981ef',
            [new Ingredient('Chicken', 1),
            new Ingredient('Pizza dough', 1),

            ]),
        new Recipe(
            'Burger',
            'The best burger',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-kushal-ij.appspot.com/o/Burger_King_Country_Burger.jpg?alt=media&token=dde9cb20-5c31-40f1-b411-018a8aaac3cb',
            [new Ingredient('Burger buns', 2),
            new Ingredient('Beef', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}