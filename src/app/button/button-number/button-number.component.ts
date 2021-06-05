import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-number',
  templateUrl: './button-number.component.html',
  styleUrls: ['./button-number.component.css']
})
export class ButtonNumberComponent implements OnInit {

  @Input() number: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
