import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingdemo1',
  templateUrl: './bindingdemo1.component.html',
  styleUrls: ['./bindingdemo1.component.css']
})
export class Bindingdemo1Component{

  blogtext:string;
  blogList:Array<string>=[];

  constructor() { }
  i=1;
  submitBlog():void{

    if(!this.blogtext){
      return;
    }

    this.blogList.push(this.blogtext);
    this.blogtext= " ";
  }

  ngOnInit() {
  }

}
