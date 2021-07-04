import { Component, Input, OnInit } from '@angular/core';
import { NumbersService } from 'src/app/numbers.service';

@Component({
  selector: 'app-button-operator',
  templateUrl: './button-operator.component.html',
  styleUrls: ['./button-operator.component.css']
})
export class ButtonOperatorComponent implements OnInit {

  @Input() operator: string = ''

  constructor(private numbersServie: NumbersService) { }

  ngOnInit(): void {
  }


}
