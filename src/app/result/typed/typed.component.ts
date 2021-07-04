import { Component, OnInit } from '@angular/core';
import { NumbersService } from 'src/app/numbers.service';

@Component({
  selector: 'app-typed',
  templateUrl: './typed.component.html',
  styleUrls: ['./typed.component.css']
})
export class TypedComponent implements OnInit {

  display: string = '';

  constructor(private numbersService: NumbersService) { 
  }
  
  ngOnInit(): void {
    this.numbersService.numberChanges.subscribe( () => {
      this.display = this.numbersService.getDisplay()
    })
  }


}
