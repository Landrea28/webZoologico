import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  animalService: any;
  constructor(private http: HttpClient) {}
  apiUri = '/api/animals';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');
  getAllAnimalsData(): Observable<any> {
    return this.http.get<any>(this.apiUri)
  }
  animalList:any= [];
  
  getAllAnimals() {
      this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList=data;
    });
  }
  ngOnInit() {
    this.getAllAnimals();
  }

}


