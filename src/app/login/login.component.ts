import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/userLogin'
import { UserService } from '../services/user.service'
import { TypeRoles } from '../models/type-roles.enum'
import { Router } from '@angular/router';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

//https://scotch.io/tutorials/angular-2-http-requests-with-observables
//http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();

  constructor(private userService: UserService,
   private router: Router, private toastyService:ToastyService, private toastyConfig: ToastyConfig) { }

    toastOptions:ToastOptions = {
            title: "",
            msg: "",
            showClose: true,
            timeout: 10000,
            theme: 'material',         
            onAdd: (toast:ToastData) => {
                //console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast:ToastData) {
                //console.log('Toast ' + toast.id + ' has been removed!');
            }
        };

  ngOnInit() {
    this.toastyConfig.theme = 'bootstrap';
        this.toastyConfig.position = 'top-center';
  }

  login() {
    var user;
    this.userService.get(this.userLogin).subscribe(
        user => { 
          this.userService.setCurrentUser(user);
          window.location.reload();
          this.router.navigate(['/profile']);  
        },
        err => { 
          console.log("error:");
          console.log(err); 
         this.toastOptions.msg = err;
         console.log(err.status);
        if(err.status == 404) {
             this.toastOptions.msg = "Usuario o contraseña invalidos";
         }
        this.toastyService.error(this.toastOptions);
      }
    );
  }
}
