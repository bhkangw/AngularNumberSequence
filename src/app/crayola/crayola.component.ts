import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-crayola',
  templateUrl: './crayola.component.html',
  styleUrls: ['./crayola.component.css']
})
export class CrayolaComponent implements OnInit {
  crayola: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  find() {
    this.crayola = this._dataService.findCrayola();
  }

}
