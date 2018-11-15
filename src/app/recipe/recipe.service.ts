import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shopping-list/shopping-edit/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Burger',
    'A hamburger with a rim of lettuce sitting on a black plate against a black background',
  'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
[
  new Ingredient('meal',1),
  new Ingredient('tomato',2)
]),
  new Recipe('fried chiken',
  'Fried chicken (also referred to as Southern fried chicken for the variant in the United States) is a dish consisting of chicken pieces usually from broiler chickens which have been floured or battered and then pan-fried, deep fried, or pressure fried. The breading adds a crisp coating or crust to the exterior of the chicken.',
  '../src/app/img/ayam.jpg',
[
  new Ingredient('chicken',1),
  new Ingredient('meal',3),
  new Ingredient('soy sauce',1)
]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  getRecipe(index:number){
    return this.recipes[index];
  }

constructor(private slsService: ShoppingListService) { }

}
