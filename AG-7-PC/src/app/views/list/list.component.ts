import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface link {
  url: SafeUrl;
  name: string;
  imgswitch: boolean;
  type: string;
  size: number,
  type_status: boolean;
  size_status: boolean
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
    // console.log('666')
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }
  file_count: number = 0;
  fileread(event) {
    // console.log(event.target.files)
    let that = this;
    for (let i = 0; i < event.target.files.length; i++) {
      let type = event.target.files[i].type;
      let size = event.target.files[i].size / 1024;
      let name = event.target.files[i].name;
      if (type === "image/png" || type === 'image/jpg' || type === "image/jpeg" || size <= 10240) {
        let objecturl = window.URL.createObjectURL(event.target.files[i]);
        let iframeSrc = this.sanit.bypassSecurityTrustResourceUrl(objecturl);
        if (size > 100) { size = 100 }
        let img: link = {
          url: iframeSrc,
          name: name,
          imgswitch: false,
          type: type,
          size: size,
          type_status: true,
          size_status: true
        }
        // console.log(that.file_count)
        this.list.push(img);
        // console.log(this.list)
        setTimeout(function (size) {
          that.list[size].imgswitch = true;
        }, size * 10, this.file_count)
        this.file_count++;
      } else {
        let type_status: boolean;
        let size_status: boolean;
        // 类型
        if (type === "image/png" || type === 'image/jpg' || type === "image/jpeg") {
          type_status = true;
        } else type_status = false;
        // 大小
        if (size >= 10240) size_status = false; else size_status = true;
        let file: link = {
          url: '',
          name: name,
          imgswitch: true,
          type: type,
          size: size,
          type_status: type_status,
          size_status: size_status
        }
        this.file_count++;
        this.list.push(file)
        // this.message.warning('不支持的图片格式，请使用PNG/JPG');
      }
    }
  }
  delete(index) {
    let anth = this.list;
    anth.splice(index, 1)
    // console.log(anth)
    this.file_count--;
  }
  change(index, event) {
    var that = this;
    let type = event.target.files[0].type;
    let size = event.target.files[0].size / 1024;
    let name = event.target.files[0].name;
    if (type === "image/png" || type === 'image/jpg' || type === "image/jpeg" || size <= 10240) {
      let objecturl = window.URL.createObjectURL(event.target.files[0]);
      let iframeSrc = this.sanit.bypassSecurityTrustResourceUrl(objecturl);
      if (size > 100) { size = 100 }
      let img: link = {
        url: iframeSrc,
        name: name,
        imgswitch: false,
        type: type,
        size: size,
        type_status: true,
        size_status: true
      }

      this.list[index] = img;
      // console.log(this.list)
      setTimeout(function (size) {
        that.list[size].imgswitch = true;
      }, size * 10, index)

    } else {
      let type_status: boolean;
      let size_status: boolean;
      // 类型
      if (type === "image/png" || type === 'image/jpg' || type === "image/jpeg")
        type_status = true; else type_status = false;
      // 大小
      if (size >= 10240) size_status = false; else size_status = true;
      let file: link = {
        url: '',
        name: name,
        imgswitch: true,
        type: type,
        size: size,
        type_status: type_status,
        size_status: size_status
      }
      this.list[index] = file;
    }
  }
}
