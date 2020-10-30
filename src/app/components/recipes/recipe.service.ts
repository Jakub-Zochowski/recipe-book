import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
  selectedRecipe = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();
  
  private recipes: Recipe[] = [
    // new Recipe('A Test Recipe',
    // 'This is simply a test',
    // 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    // [
    //   new Ingredient('Meat', 1),
    //   new Ingredient('French Fries', 20),
    // ]),
    // new Recipe('Second Recipe',
    // 'Super delicious dish',
    // 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    // [
    //   new Ingredient('Buns', 2),
    //   new Ingredient('Meat', 1),
    // ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.updateRecipesChanged();
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.updateRecipesChanged();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.updateRecipesChanged();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.updateRecipesChanged();
  }

  private updateRecipesChanged() {
    this.recipesChanged.next(this.recipes.slice());
  }
}