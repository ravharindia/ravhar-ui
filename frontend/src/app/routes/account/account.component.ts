import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public counter: number = 1;
  constructor() { }

  ngOnInit() {
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    if (this.counter === 1) {
    //  this.showCounter = false;
    } else {
      this.counter--;
    }
  }

}
