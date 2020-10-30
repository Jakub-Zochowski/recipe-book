import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;

  constructor(private slService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.id = +this.route.snapshot.params['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.id);
    })
  }

  toShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  onEditRecipe(id: number) {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['/recipes']);
  }

}
