import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hc: HttpClient) { }
  getMovies()
  {
    return this.hc.get('http://localhost:3000/movies');
  }
  deleteData(id:any)
  {
    return this.hc.delete(`http://localhost:3000/movies/${id}`);
  }
}
