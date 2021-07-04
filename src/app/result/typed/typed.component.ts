import { Component, OnInit } from '@angular/core';
import { NumbersService } from 'src/app/numbers.service';

@Component({
  selector: 'app-typed',
  templateUrl: './typed.component.html',
  styleUrls: ['./typed.component.css']
})
export class TypedComponent implements OnInit {


  constructor(private numbersService: NumbersService) { }

  number: string = ''
  
  ngOnInit(): void {

  }

}
