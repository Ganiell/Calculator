import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor() { }  

}

type NumbersAndOpetaros = {
  number: number[],
  operator: string[],
}


