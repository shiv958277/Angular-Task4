import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

  a: number = 0.259;
  b: number = 1.3495;

  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
}
