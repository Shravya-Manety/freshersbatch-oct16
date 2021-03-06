import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.components';
import {FooterComponent} from './components/footer/footer.components';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent,NavbarComponent,FooterComponent ,LoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
