import { Component, Input, OnInit } from '@angular/core';
import { NumbersService } from 'src/app/numbers.service';

@Component({
  selector: 'app-button-number',
  templateUrl: './button-number.component.html',
  styleUrls: ['./button-number.component.css']
})
export class ButtonNumberComponent implements OnInit {

  @Input() number: string = ''

  constructor(private numbersService: NumbersService) { }

  ngOnInit(): void {
  }

  addNumber(): void {
    this.numbersService.setDisplay(this.numbersService.getDisplay() + this.number)
  }

}
