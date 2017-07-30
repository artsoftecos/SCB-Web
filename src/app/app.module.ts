import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';
import {ToastyModule} from 'ng2-toasty';

//Modulos
import { ConvocatoryModule } from './convocatory/convocatory.module'
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'

// Simulating HTTP Calls
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

//Components
import { DemoUploadFilesComponent } from './Demos/demo-upload-files/demo-upload-files.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

//services
import { UserService } from './services/user.service'

@NgModule({
  declarations: [
    AppComponent,
   //se puede eliminar, si se quita el demo de arhivos
    DemoUploadFilesComponent,
   HomeComponent,
   LoginComponent,
   ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    ConvocatoryModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ToastyModule.forRoot()
    //InMemoryWebApiModule.forRoot(InMemoryUserDataService),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
