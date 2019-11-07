import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from './config';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }

  getAdvice() {
    // https://api.adviceslip.com/
    return this.http.get(Urls.advice);
  }
}
