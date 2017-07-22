import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';

//Modulos
import { ConvocatoryModule } from './convocatory/convocatory.module'
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'

//Components
import { DemoUploadFilesComponent } from './Demos/demo-upload-files/demo-upload-files.component';


@NgModule({
  declarations: [
    AppComponent,
   //se puede eliminar, si se quita el demo de arhivos
    DemoUploadFilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    ConvocatoryModule,
    AppRoutingModule,
    HttpModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
