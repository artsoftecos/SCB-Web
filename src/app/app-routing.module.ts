import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { DemoUploadFilesComponent } from './Demos/demo-upload-files/demo-upload-files.component'
import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'demoUploadFiles',  component: DemoUploadFilesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
