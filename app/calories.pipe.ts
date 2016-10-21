import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CalorieDisplayPipe implements PipeTransform {
  transform(input: Meal[], selectedCalorieDisplay) {
    var output: Meal[] = [];

    if(selectedCalorieDisplay === "low") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].highCalorie === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(selectedCalorieDisplay === "high") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].highCalorie === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }

  }
}
