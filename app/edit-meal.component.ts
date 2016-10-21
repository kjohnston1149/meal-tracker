import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
  <div id="myModal" class="modal fade" role="dialog">
   <div class="modal-dialog">
   <div class="modal-content" id="edit-form">
     <div class="modal-header">
     <h3>Edit this Meal</h3>
     </div>
     <div class="modal-body">
        <div class="form">

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
            <button  class="btn btn-default" data-dismiss="modal"
            (click)="doneClicked()">Finsih</button>
          </div>
          </div>
          </div>
      </div>
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
