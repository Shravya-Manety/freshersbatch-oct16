import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'modelDrivenForm',
  templateUrl: `./modelDriven.html` ,
  styles: [`input.ng-invalid {border-left: 5px solid red} input.ng-valid {border-left: 5px solid green}`]
})
export class  ModelDrivenFormComponent  
{ 
  title = 'ProductForm'; 
  name:string ='Sofa';
  public id:number=1;
  //categories:Array <any> =[{name:"Furniture"},{name:"Mobile"},{name:"Hardware"}];
  productForm = new FormGroup(
      {
        name:new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
        // Category:new FormControl(),
        quantity:new FormControl(null,[Validators.required]),
        price:new FormControl(null,[Validators.required])
      }
  );
//   displayDetails(nameRef:any, catRef:any,quanRef:any,priceRef:any)
//   {
    
//     this.advertise=
//     {
//         id: this.id,
//         Name:nameRef,
//         Category:catRef,
//         Quantity:quanRef,
//         Price:priceRef
//     };
   // this.advertise.push({id :this.id, Name : nameRef, Category: catRef, Quantity :quanRef, Price: priceRef });
//   console.log(this.advertise);
//    // console.log(this.advertise);
//     this.id=this.id+1;
//     this.childEvent.emit(this.advertise);

//   }
onSubmit() {
console.log(this.productForm.value);
}
  
}