import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gm-button',
  templateUrl: './gm-button.component.html',
  styleUrls: ['./gm-button.component.scss']
})
export class GmButtonComponent implements OnInit {
  @Input() text: string = 'Ok';
  @Input() modifier: string = '';

  constructor() { }

  ngOnInit() {
  	console.log(this.modifier);
  }

}
