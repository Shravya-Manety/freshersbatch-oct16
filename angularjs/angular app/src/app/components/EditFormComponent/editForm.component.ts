import { Component} from '@angular/core';
import { ProductService } from '../../services/ProductService/productService.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'editForm',
  templateUrl: `./editForm.html` 
})

export class  EditFormComponent   
{ 
  
  title = 'Edit Product Form';
  public id:number=1;
  categories:Array <any> =[{name:"Furniture"},{name:"Mobile"},{name:"Hardware"}];
  advertise={};
  adid:number=0;
  constructor(private productService: ProductService,private activatedRoute: ActivatedRoute) {
      //Declaring service dependency
       this.adid = this.activatedRoute.snapshot.params['advid'];
 }
  
//   displayDetails(idRef:any, nameRef:any, catRef:any,quanRef:any,priceRef:any)
//   {
   
//     this.advertise =
//     {
//         id:idRef,
//         Name:nameRef,
//         Category:catRef,
//         Quantity:quanRef,
//         Price:priceRef
//     };
//    // this.advertise.push({id :this.id, Name : nameRef, Category: catRef, Quantity :quanRef, Price: priceRef });
//     console.log(this.advertise);
//    // console.log(this.advertise);
//     this.productService.addProducts(this.advertise);
//     // let obj=this.productService.getProducts();
//     // console.log(obj);

//   }

    getAd()
    {   

    }
  
}
