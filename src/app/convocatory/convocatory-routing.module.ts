import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ConvocatoryListComponent } from './convocatory-list/convocatory-list.component';
import { ConvocatoryDetailComponent } from './convocatory-detail/convocatory-detail.component';

const routes: Routes = [
  { path: 'convocatories',  component: ConvocatoryListComponent },
  { path: 'convocatory/:id',  component: ConvocatoryDetailComponent },
  //{ path: 'convocatory/:id', component: HeroDetailComponent },  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ConvocatoryRoutingModule { }
