import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  private number: string = ''

  changedNumber = new EventEmitter()

  constructor() { }

  geNumber(): string{
    return this.number
  }

  setNumber(n: string){
    this.number = n
    this.changedNumber.emit(n)
  }

}
