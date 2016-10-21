import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="container">
  <h3>New Meal</h3>
    <div class="form-group">
      <label>Enter Meal Name:</label>
      <input #newMealName class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Calorie Count:</label>
      <input #newCalories class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Notes:</label>
      <input #newDescription class="form-control">
    </div>
    <button (click)="addClicked(newMealName.value, newCalories.value, newDescription.value); newMealName.value=''; newCalories.value=''; newDescription.value=''" class="btn btn-primary">Submit</button>
  </div>

  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(mealName: string, calories: number, description: string) {
    var newMealToAdd: Meal = new Meal(mealName, calories, description);
    this.newMealSender.emit(newMealToAdd);
  }
}
