import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import {GetHttpDataService} from './get-http-data.service';
import { GetMateriaByCarreraService} from './get-materia-by-carrera.service';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetHttpDataService, GetMateriaByCarreraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
