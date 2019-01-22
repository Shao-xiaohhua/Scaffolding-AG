import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpApisService {
  private apiGet = new Subject<any>();
  private apiPost = new Subject<any>();

  apiGet$ = this.apiGet.asObservable();
  apiPost$ = this.apiPost.asObservable();

  constructor(private http: HttpClient) {}
  getApis(url, data) {
    // this.http.get(url, {params: data}).subscribe((res) => {
    //   this.apiGet.next(res);
    // });
  }
  postApis(url, data) {
    const head = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    // this.http.post(url, data, head).subscribe((res) => {
    //   this.apiPost.next(res);
    // });
  }
}
