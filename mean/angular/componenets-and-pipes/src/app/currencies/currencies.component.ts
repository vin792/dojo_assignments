import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  public value: number;

  constructor() { 
  }
  
  ngOnInit() {
    this.value = 5678.91;
  }

}
