export class Meal {
  public highCalorie: boolean;
  constructor(public mealName: string, public calories: number, public description: string) {
    if(this.calories >= 500) {
      this.highCalorie = true;
      console.log(this.highCalorie);
    } else if (this.calories < 500) {
      this.highCalorie = false;
      console.log(this.highCalorie);
    }
  }

}
