import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
  <div *ngFor="let currentMeal of childMealList">
  <h2>{{ currentMeal.mealName }}</h2>
  <h4>Calories in this meal: {{ currentMeal.calories }}</h4>
  <h4>Description or notes: {{ currentMeal.description }}</h4>
  <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

}
