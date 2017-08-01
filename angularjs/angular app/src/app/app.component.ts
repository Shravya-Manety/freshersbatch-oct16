import { Component } from '@angular/core';
import { ProductService } from "./services/ProductService/productService.service";


@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  //`<AdForm></AdForm> <br> <AdTableApp></AdTableApp>`,
  // `<modelDrivenFormBuild></modelDrivenFormBuild>`
  //`<modelDrivenForm></modelDrivenForm>`
  providers:[ProductService]
})
export class AppComponent  
{ 
  advertises:Array<any> = [];
  constructor(productService:ProductService)
  {

  }
  postAd(value:any):void
  {
    console.log(value);
    this.advertises.push(value);
    console.log(this.advertises);
  }
  

}
