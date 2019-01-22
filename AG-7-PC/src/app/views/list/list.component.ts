import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
interface link {
  url: SafeUrl;
  imgswitch: boolean;
  count: number
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private sanit: DomSanitizer
  ) { }

  list = [
  ]

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log('666')
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }
  file_count: number = 0;
  fileread(event) {
    console.log(event.target.files)
    let that = this;
    for (let i = 0; i < event.target.files.length; i++) {
      let type = event.target.files[i].type;
      if ( type === "image/png" || type === 'image/jpg' || type === "image/jpeg") {
        let objecturl = window.URL.createObjectURL(event.target.files[i]);
        let iframeSrc = this.sanit.bypassSecurityTrustResourceUrl(objecturl);
        let size = event.target.files[i].size / 1024;
        if( size > 100) {size = 100}
        let img: link = {
          url: iframeSrc,
          imgswitch: false,
          count: size
        }
        console.log(that.file_count)
        this.list.push(img);
        console.log(this.list)
        setTimeout(function(count) {
          that.list[count].imgswitch = true;
        },size*10, this.file_count)
        this.file_count++;
      } else {
        console.log('失败')
        continue;
      }
    }
  }
  delete(index) {
    let anth = this.list;
    anth.splice(index, 1)
    console.log(anth)
    this.file_count--;
  }
}
