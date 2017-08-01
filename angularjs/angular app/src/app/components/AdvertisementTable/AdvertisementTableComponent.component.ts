import {Component} from '@angular/core';
import { ProductService } from '../../services/ProductService/productService.service';
import { Router } from "@angular/router";

@Component({
  selector: 'AdTableApp',
  templateUrl: `./AdTable.html`,
  inputs:['tableVal']
})


export class AdvertisementTableComponent
{
 tableVal:Array<any>=[];
//     addToTable()
//   {
    
//     var add:object=
//     {
//         Name:nameRef,
//         Category:catRef,
//         Quantity:quanRef,
//         Price:priceRef
//     };
constructor(private productService: ProductService, private router: Router) {//Declaring service dependency
  this.tableVal=productService.getProducts();
}
gotoEdit(advid:number)
{
  this.router.navigate(['/edit',advid]);
}


// deleteAd(id:number)
// {

//   console.log(this.tableVal);
//   this.tableVal.forEach(ad => {
//     if(ad.id === id)
//     {
//       let delobj=this.tableVal.indexOf(ad);
//       this.tableVal.splice(delobj,1);
//     }

//   });
// }


   
}