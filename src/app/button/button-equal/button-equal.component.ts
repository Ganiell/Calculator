import { Component, OnInit } from '@angular/core';
import { NumbersService } from 'src/app/numbers.service';

@Component({
  selector: 'app-button-equal',
  templateUrl: './button-equal.component.html',
  styleUrls: ['./button-equal.component.css']
})
export class ButtonEqualComponent implements OnInit {

  constructor(private numberService: NumbersService) { }

  ngOnInit(): void {
  }

}
