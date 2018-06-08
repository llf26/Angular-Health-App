import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food'
import { FoodsService } from '../foods.service'

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})



export class FoodsComponent implements OnInit {
  @Input() query: string;
  
  foods: Food[] = [];
  
  constructor(private FoodsService: FoodsService) { }

  ngOnInit() {
    this.getFoods(this.query);
  }
  
  getFoods(sentence: string): void{
    this.FoodsService.getFoods(sentence).subscribe(data => this.foods = this.mapToFoodArray(data.foods) )
  }

  private mapToFoodArray(arr: Array<any>): Food[] {
    let foods = Array<Food>();
    arr.forEach(food =>{
      foods.push(new Food(
        food.food_name, 
        food.ndb_no, 
        food.nf_calories, 
        food.nf_total_carbohydrate
      ))
    });

    return foods;
  }
}
