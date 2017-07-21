import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';

// Simulating HTTP Calls
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryConvocatoryDataService }  from '../mocks/mock-convocatories';

//Modules
import { ConvocatoryRoutingModule } from './convocatory-routing.module'

//Components
import { ConvocatoryListComponent } from './convocatory-list/convocatory-list.component';
import { ConvocatoryDetailComponent } from './convocatory-detail/convocatory-detail.component';
import { UploadSingleFileComponent } from '../shared/upload-single-file/upload-single-file.component';

//Services
import { ConvocatoryService } from '../services/convocatory.service'

@NgModule({
  imports: [  //Only modules
    CommonModule,
    ConvocatoryRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryConvocatoryDataService),
    FileUploadModule
  ],
  declarations: [ //Components
    ConvocatoryListComponent,
    ConvocatoryDetailComponent,
    UploadSingleFileComponent
  ], 
  providers: [ConvocatoryService]
})
export class ConvocatoryModule { }
