import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  username: string = 'saitama';
  a = 10;
  b = 20;
  isGood = false;
  fun() {
    this.isGood = this.isGood ? false : true;
  }

  isDisable = false;
  imgURL =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8-aGCVQm9-hpU01sGMfFQSFzdqssHWU5Rg&s';
}
