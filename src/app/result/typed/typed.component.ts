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
      this.numbersService.changedNumber.subscribe( n => {
        if(!(this.number.length == 0 && n == '.')) {
          this.number += n
          if((this.number.split(".").length - 1) >= 2){
            this.number = this.number.slice(0, this.number.length - 1)
          }
        }
      }
      )
  }

}
