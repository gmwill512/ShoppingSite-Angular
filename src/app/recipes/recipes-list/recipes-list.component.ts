import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe("Test 1 Recipe", "Test 1 Description", "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg"),
    new Recipe("Test 2 Recipe", "Test 2 Description", "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg"),
    new Recipe("Test 3 Recipe", "Test 3 Description", "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg")
  ]
  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
