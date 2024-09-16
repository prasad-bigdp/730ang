import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isShow = false
  change()
  {
    if (this.isShow)
      this.isShow = false
    else
      this.isShow = true
  }
 

}
