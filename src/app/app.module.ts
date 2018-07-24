import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';

import { NavHeaderComponent } from './nav-header/nav-header.component';
import { MakeComponent } from './vehicle/make/make.component';
import { ModelComponent } from './vehicle/model/model.component';
import { YearComponent } from './vehicle/year/year.component';


const appRoutes: Routes = [
  {path: 'make', component: MakeComponent},
  {path: 'model', component: ModelComponent},
  {path: 'year', component: YearComponent}, 
  {path: '', redirectTo:'/make', pathMatch:'full'}, // Default router
  {path: '**', redirectTo:'/make', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MakeComponent,
    NavHeaderComponent,
    ModelComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
