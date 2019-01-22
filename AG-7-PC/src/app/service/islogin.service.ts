import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsloginService {
  private state = {
    allNumber: 0,
    crfcode: '', // csrf token
    collection: '' // 公钥
  }
  private baseUrl = 'api/'
  constructor( private http: HttpClient) { }

  collection() {
    return this.http.get(this.baseUrl + 'service/rest/fw.System/collection/key?')
  }
  crfcode() {
    return this.http.get(this.baseUrl + 'service/rest/fw.System/collection/csrf?')
  }
  getLogin(url: HttpParams) {
    return this.http.post(this.baseUrl + "login?", url)
  }

}
