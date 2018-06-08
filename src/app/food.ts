export class Food {
    public name: string;
    public id: number;
    public calories: number;
    public carbs: number;
    constructor(name: string, id: number, calories: number, carbs: number){
        this.name = name;
        this.id = id;
        this.calories = calories;
        this.carbs = carbs; 
    }
}