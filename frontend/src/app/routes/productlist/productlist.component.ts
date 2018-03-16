import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public toggleSideBar: Boolean = false;
  public productInfo: any[] = [
    {
      productImg: "assets/images/product.jpg",
      productName: "Pizza",
      productType: "Fast Food",
      productCost: 20
    },
    {
      productImg: "assets/images/product.jpg",
      productName: "Pizza",
      productType: "Fast Food",
      productCost: 20
    },
    {
      productImg: "assets/images/product.jpg",
      productName: "Pizza",
      productType: "Fast Food",
      productCost: 20
    },
    {
      productImg: "assets/images/product.jpg",
      productName: "Pizza",
      productType: "Fast Food",
      productCost: 20
    },
    {
      productImg: "assets/images/product.jpg",
      productName: "Pizza",
      productType: "Fast Food",
      productCost: 20
    },{
      productImg: "assets/images/product.jpg",
      productName: "Pizza",
      productType: "Fast Food",
      productCost: 20
    }
  ]

  constructor() { }

  ngOnInit() { 
  }

}
