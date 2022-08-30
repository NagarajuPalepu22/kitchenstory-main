import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   
  constructor() { }

  ngOnInit(): void {
  }
  productList = [
     {
      prodId:1,
      img:"/assets/images/banana.jpg",
      name:'Banana',
      NetQuantity:'12nos ',
      price : 99,
      qnt:1
     },
     {
      prodId:2,
      img:"/assets/images/badam.jpeg",
      name:'Badam',
      NetQuantity:'1kg ',
      price : 299,
      qnt:1
     },
     {
      prodId:3,
      img:"/assets/images/butter.jpeg",
      name:'Butter',
      NetQuantity:'1kg ',
      price : 499,
      qnt:1
     },
     {
      prodId:4,
      img:"/assets/images/anjeer.jpeg",
      name:'Anjeer',
      NetQuantity:'500g ',
      price : 199,
      qnt:1
     },
     {
      prodId:4,
      img:"/assets/images/cabbage.jpg",
      name:'cabbage',
      NetQuantity:'1kg ',
      price : 99,
      qnt:1
     },
     {
      prodId:5,
      img:"/assets/images/cheese.jpg",
      name:'cheese',
      NetQuantity:'500g ',
      price : 199,
      qnt:1
     },
     {
      prodId:6,
      img:"/assets/images/eggs.jpeg",
      name:'Eggs',
      NetQuantity:'12 Nos ',
      price : 99,
      qnt:1
     },
     {
      prodId:1,
      img:"/assets/images/kaaju.jpeg",
      name:'Kaaju',
      NetQuantity:'1kg ',
      price : 499,
      qnt:1
     },
    
  ];
  
  
  inc(product){
      // console.log(product.qnt)
      if(product.qnt !=5){
       product.qnt=product.qnt+1
      }
  }
  dec(product){
    if(product.qnt !=1){
      product.qnt=product.qnt-1
     }
     }
     itemsCart:any = [];
     addcart(category){
       console.log(category);
       let cartDataNull = localStorage.getItem('localCart');
       if(cartDataNull== null){
        let storeDataGet:any = [];
        storeDataGet.push(category);
        localStorage.setItem('localcart',JSON.stringify(storeDataGet));
       }
       else{
        var id =category.prodId;
        let index:number = -1;
        this.itemsCart =JSON.parse(localStorage.getItem('localCart')as any) ;
        for(let i=0; i<this.itemsCart.length; i++){
          if(parseInt(id)===parseInt(this.itemsCart[i].prodId)){
            this.itemsCart[i].qnt=category.qnt;
            index=i;
            break;
          }
        }
       if(index == -1){
        this.itemsCart.push(category);
        localStorage.setItem('localcart',JSON.stringify(this.itemsCart));
       }
       else{
        localStorage.setItem('localcart',JSON.stringify(this.itemsCart));
       }
       }
       
     }
  }

