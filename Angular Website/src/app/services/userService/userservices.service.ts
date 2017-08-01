import {Injectable} from '@angular/core';
import { Http, Response, RequestOptions ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()

export class UserService
{
    users:Array<any> = [];
    constructor(private _http: Http) 
    {
    }
    loginUserOnServer(user:any)
    {
        let url = "http://192.168.3.144:9000/login";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(url, user, options)
        .map((response: Response)=>response.json());
    }

    registerUserOnServer(user:any)
    {
        let url = "http://192.168.3.144:9000/register";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(url, user, options)
        .map((response: Response)=>response.json());
    }


}