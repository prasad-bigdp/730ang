import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
movies:any[]=[]
  constructor(private api: ApiService) {
  this.api.getMovies().subscribe((val:any)=>this.movies=val)
}
  deleteMovie(id:any)
  {
    this.api.deleteData(id).subscribe((val) => {
      console.log(val);
      window.location.reload()
    })
  }
}
