import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exampleQuery = 'I had one apple, an orange, a banana, a bagel, pizza, tacos, grapes, and some eggs';
}
