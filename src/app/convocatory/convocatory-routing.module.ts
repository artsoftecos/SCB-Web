import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvocatoryListComponent } from './convocatory-list/convocatory-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/convocatories', pathMatch: 'full' },
  { path: 'convocatories',  component: ConvocatoryListComponent }
  //{ path: 'convocatory/:id', component: HeroDetailComponent },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ConvocatoryRoutingModule { }
