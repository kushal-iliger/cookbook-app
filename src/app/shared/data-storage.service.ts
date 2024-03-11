import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ReciepeSercive } from "../../components/recipes/recipe.service";
import { Recipe } from "../../components/recipes/recipe.model";

@Injectable({ providedIn: 'root' })

export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: ReciepeSercive) { }

    storeRecipes() {

        const recipe = this.recipeService.getRecipes();
        return this.http.put('https://cook-book-backend-62768-default-rtdb.firebaseio.com/recipes.json', recipe).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {
        this.http
            .get<Recipe[]>('https://cook-book-backend-62768-default-rtdb.firebaseio.com/recipes.json')
            .subscribe(recipe => {
                this.recipeService.setRecipes(recipe);
            });
    }
}