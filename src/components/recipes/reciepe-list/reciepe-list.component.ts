import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ReciepeSercive } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrl: './reciepe-list.component.css'
})
export class ReciepeListComponent implements OnInit {

  recipes: Recipe[];


  constructor(private recipeSercive: ReciepeSercive,
    private router: Router,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.recipes = this.recipeSercive.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
