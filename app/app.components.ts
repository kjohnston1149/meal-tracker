import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>This was a triumph</h1>
  <h2 *ngFor="let currentMeal of masterMealList">{{ currentMeal.mealName }}</h2>
  <new-meal
  (newMealSender)="addMeal($event)"></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[]= [
    new Meal("Hot Dog", 300, "Why did I eat this whole thing?"),
    new Meal("Apple Pie", 1000, "Worth it."),
    new Meal("Carrots", 100, "Making Progress.")
  ];
//   selectedMeal: Meal = null;
//   showDetails(clickedMeal: Meal) {
//     this.selectedMeal = clickedMeal;
//   }
//
// finishedEditing() {
//   this.selectedMeal = null;
// }
addMeal(newMealFromChild: Meal) {
  this.masterMealList.push(newMealFromChild);
}


}
