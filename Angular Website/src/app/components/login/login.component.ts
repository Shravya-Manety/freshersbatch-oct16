import { Component} from '@angular/core';
import { UserService } from '../../services/userService/userservices.service';

@Component({
  selector: 'login',
  templateUrl: `./logincomponent.html`,
})
export class  LoginComponent  
{
    user:any={};
    constructor(private userService: UserService)
    {
    }

    sendLoginUser(nameRef:any,passwordRef:any)
    {
        this.user=
        {
            username:nameRef,
            password:passwordRef
        }
        console.log(this.user);
        this.userService.loginUserOnServer(this.user).subscribe((response)=>
            console.log("Server reply:",response));
    }
    sendRegUser(fnameRef:any,lnameRef:any,unameRef:any,passwordRef:any,emailRef:any,mobileRef:any)
    {
        this.user=
        {
            firstName : fnameRef,
            lastName: lnameRef,
            username: unameRef,
            password: passwordRef,
            email: emailRef,
            phone: mobileRef
        }
        console.log(this.user);
        this.userService.registerUserOnServer(this.user).subscribe((response)=>
            console.log("Server reply:",response));
    }

}