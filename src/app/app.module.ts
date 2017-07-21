import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';

//Modulos
import { ConvocatoryModule } from './convocatory/convocatory.module'
import { ConvocatoryRoutingModule } from './convocatory/convocatory-routing.module'

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    ConvocatoryModule,
    ConvocatoryRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
