import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  beta: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.beta = this._dataService.retrieveBeta();
  }

  pushBeta() {
    this._dataService.newBeta(Math.trunc(Math.random() * 10))
  }

}
