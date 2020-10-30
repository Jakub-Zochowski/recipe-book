import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeItemDefaultComponent } from './recipe-list/recipe-item-default/recipe-item-default.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes-resolver.service';
import { RecipesComponent } from './recipes.component';
import { AuthGuard } from '../../components/auth/auth.guard';



const routes: Routes = [
  { path: '', component: RecipesComponent, canActivate: [AuthGuard],
  children: [
    {path: '', component: RecipeItemDefaultComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }