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
  @Input() productPrice:number;

  constructor() { }

  ngOnInit() {
    console.log(this.productImg)
    
  }

}
