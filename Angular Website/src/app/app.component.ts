import { Component } from '@angular/core';
import { UserService } from './services/userService/userservices.service';

@Component({
  selector: 'my-app',
  template: `<navbar></navbar>
  <br>
  <footerSel></footerSel>`,
  providers:[UserService]
})
export class AppComponent  { }
