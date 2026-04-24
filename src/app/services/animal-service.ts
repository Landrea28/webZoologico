import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private http: HttpClient) {}
  apiUri = '/api/animals';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  getAnimals(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUri);
  }
}


