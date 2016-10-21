export class Meal {
  public highCalorie: boolean = false;
  constructor(public mealName: string, public calories: number, public description: string) {  }

  isItHighCalorie() {
    if(this.calories >= 500) {
      this.highCalorie = true;
    }
  }
}
