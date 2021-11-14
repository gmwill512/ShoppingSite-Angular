import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("apple", 5),
    new Ingredient("tomatoes", 5),
    new Ingredient("oranges", 5),

  ]
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }

}
