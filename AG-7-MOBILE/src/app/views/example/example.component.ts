import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpApisService } from 'src/app/service/api/http-apis.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  providers: [HttpApisService]
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('numbers') numbers: any; // 获取dom元素
  @ViewChild('child') childComponent: any; // 获取子组件
  public title = 'child works';
  public lists = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: '184px'
  };
  constructor(private httpApisService: HttpApisService) {
    httpApisService.apiGet$.subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
    // 页面开始加载钩子函数
    const url = '/api/heroes';
    const data = { id: '123qwe' }; // get传递参数
    this.httpApisService.getApis(url, data);
    // this.http.get(url, {params: data}).subscribe((res) => {
    //   console.log(res);
    // });
  }
  ngAfterViewInit() {
    // 视图加载完毕钩子函数
    console.log(this.numbers.nativeElement);
  }
  clickBtn() {
    console.log('=======');
    this.childComponent.write(); // 调用子组件的方法
  }


  beforeChange(event) {
    // console.log('slide ' + event.from + ' to ' + event.to);
  }

  afterChange(event) {
    // console.log('slide to ' + event);
  }
}
