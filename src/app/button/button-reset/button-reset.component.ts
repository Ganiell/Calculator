import { Component, OnInit } from '@angular/core';
import { NumbersService } from 'src/app/numbers.service';

@Component({
  selector: 'app-button-reset',
  templateUrl: './button-reset.component.html',
  styleUrls: ['./button-reset.component.css']
})
export class ButtonResetComponent implements OnInit {

  constructor(private numberService: NumbersService) { }

  ngOnInit(): void {
  }

  public reset(){
    this.numberService.setDisplay("")
  }

}
