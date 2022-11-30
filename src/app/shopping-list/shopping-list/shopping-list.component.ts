import { Component } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient("Chicken",5),
        new Ingredient("Flour", 8)
    ];

}