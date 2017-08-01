import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'templateDriven',
  templateUrl: `./template.html` ,
  outputs:['childEvent'],
})
export class  TemplateDrivenFormComponent  
{ 
  title = 'Product Form'; 
  name:string ='Sofa';
  public id:number=1;
  categories:Array <any> =[{name:"Furniture"},{name:"Mobile"},{name:"Hardware"}];
  public childEvent = new EventEmitter<any>();
  advertise:any={};
  
  displayDetails(nameRef:any, catRef:any,quanRef:any,priceRef:any)
  {
    
    this.advertise=
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
    this.childEvent.emit(this.advertise);

  }
  
}