import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'users',  component: UserListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class UserRoutingModule { }