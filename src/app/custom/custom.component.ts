import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  title = 'Custom Template string interpoltion';
  isDisabled = true;
  customText = '';
  inputText = '';
  serverText = '';
  elementCreated = false;
  elementCreated2 = false;

  constructor() { 
    setTimeout(()=>{
      this.isDisabled  = false;
    },3000);
  }

  ngOnInit() {
  }

  onCreateText() {
    this.customText = 'this is some custom text triggered though event';
  }

  onEnterText(event:any) {
    this.inputText = event.target.value;
  }

  onButtonClick(){
    this.elementCreated = true;
  }

  onButtonClick2() {
    this.elementCreated2 = true;
  }
}
