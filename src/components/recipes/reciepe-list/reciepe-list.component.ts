import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ReciepeSercive } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrl: './reciepe-list.component.css'
})
export class ReciepeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;


  constructor(private recipeSercive: ReciepeSercive,
    private router: Router,
    private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.subscription = this.recipeSercive.recipesChanges.
      subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      )
    this.recipes = this.recipeSercive.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
