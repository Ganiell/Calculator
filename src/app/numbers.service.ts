import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  public display: string;
  public numberChanges: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.display = ''
  }  


  public getDisplay(): string {
    return this.display
  }

  public setDisplay(display: string) {
    this.display = display
    this.numberChanges.emit()
  }

  public calculate(): number {
    return Number(this.display) + 2
  }

}

type NumbersAndOpetaros = {
  number: number[],
  operator: string[],
}


