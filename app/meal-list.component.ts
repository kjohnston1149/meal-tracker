import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template:`
  <div *ngFor="let currentMeal of childMealList">
    <h2> {{ currentMeal.name }} </h2>
    <h3>Calories: {{ currentMeal.calories }} </h3>
    <h3>Notes: {{ currentMeal.description }} </h3>
    <button (click)="editButtonHasBeenClicked(currentMeal)" class="btn btn-primary">Edit<button>
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
