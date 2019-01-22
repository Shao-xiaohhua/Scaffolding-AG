import { PublicMethodService } from './../../service/public-method.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [PublicMethodService]
})
export class ChildComponent implements OnInit {
  @Input() title: string; // 父组件传入参数
  constructor( private publicMethodService: PublicMethodService ) { }

  ngOnInit() {
    this.publicMethodService.exMethods('触发公共事件'); // 获取服务中的事件并触发
  }
  write() {
    console.log('子组件事件');
  }
}
