import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
  <div class="form">
    <h3>Edit this Meal</h3>
    <div>
      <label>Enter Meal name:</label>
      <input [(ngModel)]="childSelectedMeal.mealName">
    </div>
    <div>
      <label>Enter Calorie Count</label>
      <input [(ngModel)]="childSelectedMeal.calories">
    </div>
    <div>
      <label>Enter Notes:</label>
      <input [(ngModel)]="childSelectedMeal.description">
      <button  class="btn btn-default"
      (click)="doneClicked()">Finsih</button>
    </div>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
