import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	users : User[];
	titulo: string = "Hola muchachos.";
	
  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.getUsers();
  }

  getUsers() {
	this.users = this.userService.getUsers();
  }

}
