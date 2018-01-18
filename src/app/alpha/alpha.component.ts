import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  alpha: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.alpha = this._dataService.retrieveAlpha();
  }

  pushAlpha() {
    this._dataService.newAlpha(Math.trunc(Math.random() * 10))
  }
  
}
