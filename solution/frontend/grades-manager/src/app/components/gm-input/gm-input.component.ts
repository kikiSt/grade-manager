import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gm-input',
  templateUrl: './gm-input.component.html',
  styleUrls: ['./gm-input.component.scss']
})
export class GmInputComponent implements OnInit {
  @Input() modifier: string;
  @Input() inputtype: string = "text";
  @Input() placeholder: string;
  @Input() inputValue: string
  
  @Output() gmValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitValue(){
    this.gmValue.emit(this.inputValue);
  } 
}