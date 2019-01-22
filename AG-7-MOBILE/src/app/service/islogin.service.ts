import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class IsloginService {
  private baseUrl = 'apis/';
  constructor(private http: HttpClient) {}

  collection() {
    return this.http.get(
      this.baseUrl + 'service/rest/fw.System/collection/key?'
    );
  }
  crfcode() {
    return this.http.get(
      this.baseUrl + 'service/rest/fw.System/collection/csrf?'
    );
  }
  getLogin(url: HttpParams) {
    return this.http.post(this.baseUrl + 'login?', url);
  }
}
