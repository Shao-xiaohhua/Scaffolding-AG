import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicMethodService {
  private variable = new Subject<string>(); // 公共变量
  variable$ = this.variable.asObservable();
  constructor() {}
  exMethods(words: string) {
    // 公共事件
    console.log(words);
  }
  controlVariable(variable: string) {
    this.variable.next(variable); // 改变变量
  }
}
