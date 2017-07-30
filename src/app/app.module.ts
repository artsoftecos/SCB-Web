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

//Modulos
import { ConvocatoryModule } from './convocatory/convocatory.module'
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'

//Components
import { DemoUploadFilesComponent } from './Demos/demo-upload-files/demo-upload-files.component';
import { HomeComponent, ModalUsuario } from './home/home.component';

import {CdkTableModule} from '@angular/cdk';

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
  ],
  declarations: [
    AppComponent,
   //se puede eliminar, si se quita el demo de arhivos
    DemoUploadFilesComponent,
    HomeComponent,
    ModalUsuario,
  ],
  entryComponents: [
    ModalUsuario
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}

// platformBrowserDynamic().bootstrapModule(PlunkerAppModule);