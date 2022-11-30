import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Fried Chicken","Rub flour on chicken and fry",
    "https://upload.wikimedia.org/wikipedia/commons/6/62/Korean_fried_chicken_5.jpg"),
    new Recipe("Fried Chicken","Rub flour on chicken and fry",
    "https://upload.wikimedia.org/wikipedia/commons/6/62/Korean_fried_chicken_5.jpg")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
