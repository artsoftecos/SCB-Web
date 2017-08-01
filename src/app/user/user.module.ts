import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserCreateComponent } from './user-create/user-create.component'

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  exports: [
    UserCreateComponent
  ],
  declarations: [UserListComponent, UserCreateComponent]
})
export class UserModule { }
