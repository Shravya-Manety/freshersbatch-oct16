import { Component, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/ProductService/productService.service';

@Component({
  selector: 'AdForm',
  templateUrl: `./AdForm.html` ,
  outputs:['childEvent']
})
export class  AdvertisementFormComponent  
{ 
  
  title = 'Product Form'; 
  name:string ='Sofa';
  public id:number=1;
  categories:Array <any> =[{name:"Furniture"},{name:"Mobile"},{name:"Hardware"}];
  public childEvent = new EventEmitter<any>();
  advertise={};
  constructor(private productService: ProductService) {//Declaring service dependency
 }
  
  displayDetails(nameRef:any, catRef:any,quanRef:any,priceRef:any)
  {
   
    this.advertise =
    {
        id: this.id,
        Name:nameRef,
        Category:catRef,
        Quantity:quanRef,
        Price:priceRef
    };
   // this.advertise.push({id :this.id, Name : nameRef, Category: catRef, Quantity :quanRef, Price: priceRef });
    console.log(this.advertise);
   // console.log(this.advertise);
    this.id=this.id+1;
    this.productService.addProducts(this.advertise);
    // let obj=this.productService.getProducts();
    // console.log(obj);

  }
  
}