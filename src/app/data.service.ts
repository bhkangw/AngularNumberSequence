import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  alpha: number[] = [];
  beta: number[] = [];
  crayola: number = 0;

  constructor() { }

  retrieveAlpha(): number[] {
    return this.alpha;
  }

  retrieveBeta(): number[] {
    return this.beta;
  }

  newAlpha(num: number) {
    this.alpha.push(num);
  }

  newBeta(num: number) {
    this.beta.push(num);
  }

  addAlpha(): number {
    let sum = 0;
    for(let num of this.alpha){
      sum = sum+=num;
    }
    return sum;
  }

  addBeta(): number {
    let sum = 0;
    for (let num of this.beta) {
      sum = sum += num;
    }
    return sum;
  }

  findCrayola(): number {
    return this.addAlpha() - this.addBeta()
  }
}
