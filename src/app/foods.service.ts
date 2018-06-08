import { Injectable } from '@angular/core';
import { Food } from './food';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': "application/json",
    'x-app-id': '760abb99',
    'x-app-key': '57b7d25b41a66048c03b24e2d6faa3b0',
    'x-remote-user-id': "0"
   })
};

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private http: HttpClient) { }

  private apiURL = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

  getFoods(sentence: string): Observable<any> {
    let foods = new Array<Food>();

    let body = JSON.stringify({
      'query': sentence,
      'timezone': "US/Eastern"
    });

    return this.http.post<any>(this.apiURL, body, httpOptions);       
  }
}
