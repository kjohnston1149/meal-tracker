import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
    <h3>Edit this Meal</h3>
    <form>
    <div>
      <label>Enter Meal name:</label>
      <input [(ngModel)]="childSelectedMeal.name">
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
    </form>
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
