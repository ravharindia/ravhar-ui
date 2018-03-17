import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productbox',
  templateUrl: './productbox.component.html',
  styleUrls: ['./productbox.component.css']
})
export class ProductboxComponent implements OnInit {

  @Input() productImg;
  @Input() productName;
  @Input() productType;
  @Input() productPrice: number;
  public counter: number = 1;
  public showCounter: false;
  constructor() { }

  ngOnInit() {
    console.log(this.productImg)
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    if (this.counter === 1) {
      this.showCounter = false;
    } else {
      this.counter--;
    }
  }

}
