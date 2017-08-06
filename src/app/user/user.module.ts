import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { OferentCreateComponent } from './oferent-create/oferent-create.component'
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterializeModule
  ],
  declarations: [UserListComponent, OferentCreateComponent],
  exports: [
    OferentCreateComponent
  ]
})
export class UserModule { }
