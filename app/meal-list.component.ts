import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
  <div class="well">
    <!--High Calorie DropDown Selector-->
    <label>Display high and low calorie meals</label>
    <select (change)="onChange($event.target.value)" class="fiter form-control">
      <option value="default" selected="selected">Choose calorie display</option>
      <option value="low">Low Calorie Meals</option>
      <option value="high">High Calorie Meals</option>
    </select>

    <!--Display tasks-->
    <div *ngFor="let currentMeal of childMealList | calories:selectedCalorieDisplay" class="well">
    <h2>{{ currentMeal.mealName }}</h2>
    <h4>Calories in this meal: {{ currentMeal.calories }}</h4>
    <h4>Description or notes: {{ currentMeal.description }}</h4>
    <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCalorieDisplay;
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  onChange(optionFromMenu) {
    this.selectedCalorieDisplay = optionFromMenu;
  }

}
