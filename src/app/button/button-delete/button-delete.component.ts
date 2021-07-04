import { Component, OnInit } from '@angular/core';
import { NumbersService } from 'src/app/numbers.service';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.css']
})
export class ButtonDeleteComponent implements OnInit {

  constructor(private numbersService: NumbersService) { }

  ngOnInit(): void {

  } 

  delete(){
    let display = this.numbersService.getDisplay();
    display = display.substring(0, display.length - 1)
    this.numbersService.setDisplay(display);
  }

}
