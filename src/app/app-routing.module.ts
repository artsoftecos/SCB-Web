import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { DemoUploadFilesComponent } from './Demos/demo-upload-files/demo-upload-files.component'

const routes: Routes = [  
  { path: '', redirectTo: '/convocatories', pathMatch: 'full' },
  { path: 'demoUploadFiles',  component: DemoUploadFilesComponent }    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
