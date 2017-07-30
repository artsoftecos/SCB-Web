import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MdDialog,
  MdDialogRef,
} from '@angular/material';
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

import {CdkTableModule} from '@angular/cdk';

//services
import { UserService } from './services/user.service'

import 'hammerjs';

@NgModule({
  exports: [
    CdkTableModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ]
})
export class MaterialModule {}


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
    BrowserAnimationsModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    MaterialModule,

    ConvocatoryModule,
    AppRoutingModule,
    SharedModule,
    MdDialogModule,
    HttpModule,
    SharedModule,
    ToastyModule.forRoot()
    //InMemoryWebApiModule.forRoot(InMemoryUserDataService),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}

// platformBrowserDynamic().bootstrapModule(PlunkerAppModule);