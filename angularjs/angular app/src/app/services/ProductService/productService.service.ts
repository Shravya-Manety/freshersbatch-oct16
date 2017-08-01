import {Injectable} from '@angular/core';


@Injectable()

export class ProductService{
products:Array<any> = [];

getProducts() 
{
    return this.products;
}

addProducts(productObj:any)
{
    this.products.push(productObj);
}

    deleteAd(id:number)
{

  console.log(this.products);
  this.products.forEach(ad => {
    if(ad.id === id)
    {
      let delobj=this.products.indexOf(ad);
      this.products.splice(delobj,1);
    }

  });
}

}
