import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {AdvertisementFormComponent} from './components/AdvertisementForm/AdvertisementFormComponent.component';
import {AdvertisementTableComponent} from './components/AdvertisementTable/AdvertisementTableComponent.component';
import {EditFormComponent} from './components/EditFormComponent/editForm.component';
import {HomeComponent} from './components/HomeComponent/home.component';
import {SearchAd} from './Pipe/search'
import {TemplateDrivenFormComponent} from './components/TemplateDriven/templateDriven';
import {ModelDrivenFormComponent} from './components/ModelDriven/modelDriven.component';
import {ModelDrivenFormBuilderComponent} from './components/ModelDrivenFormBuilder/modelDrivenFB.component';
@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule, RouterModule.forRoot([
{path: '', component: HomeComponent},
{path: 'edit/:advid', component: EditFormComponent}
])],
  declarations: [ AppComponent,AdvertisementFormComponent,AdvertisementTableComponent ,SearchAd,HomeComponent,EditFormComponent],
  bootstrap:    [ AppComponent ]
}) 
export class AppModule { }
