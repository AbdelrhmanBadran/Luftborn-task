import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private http : HttpClient
  ) { }

  getCards() {
    return this.http.get( environment.apiUrl + 'products?limit=10');
  }

}
