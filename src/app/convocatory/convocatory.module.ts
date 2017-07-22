import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

// Simulating HTTP Calls
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryConvocatoryDataService }  from '../mocks/mock-convocatories';

//Modules
import { ConvocatoryRoutingModule } from './convocatory-routing.module'
import { SharedModule } from '../shared/shared.module'

//Components
import { ConvocatoryListComponent } from './convocatory-list/convocatory-list.component';
import { ConvocatoryDetailComponent } from './convocatory-detail/convocatory-detail.component';
import { ConvocatoryApplyComponent } from './convocatory-apply/convocatory-apply.component';

//Services
import { ConvocatoryService } from '../services/convocatory.service'

@NgModule({
  imports: [  //Only modules
    CommonModule,
    ConvocatoryRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryConvocatoryDataService),
    SharedModule
  ],
  declarations: [ //Components
    ConvocatoryListComponent,
    ConvocatoryDetailComponent,
    ConvocatoryApplyComponent
  ], 
  exports: [ConvocatoryRoutingModule],
  providers: [ConvocatoryService]
})
export class ConvocatoryModule { }
