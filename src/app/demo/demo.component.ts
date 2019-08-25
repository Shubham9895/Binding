import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  /* InterPloation */
  title:string="New Sangvi";

  constructor() {
    setTimeout(() => {
      this.title="Old Sangvi";      
    },5000);
   }

  /*Property Binding*/
  temp:string="SHUBHAM";

/*Event Binding*/
SAKHARE:string="Shubham";
updateText(){
  this.SAKHARE="SHUBHAM SHAILESH SAKHARE";
}

  ngOnInit() {
  }

  
}
