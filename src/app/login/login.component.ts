// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { User } from '../models/user.model';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm:FormGroup=new FormGroup({});

//   constructor(public userService:LoginService, private router:Router) {

// this.loginForm=new FormGroup({
//   username: new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(30)]),
//   password: new FormControl(null, [Validators.required, Validators.minLength(5),Validators.maxLength(5)]),
// });
//   }

//   user:User=new User();
//   username:string | undefined;
//   password:number | undefined;

// send(){
// this.user.username=this.username;
// this.user.password=this.password;
// this.userService.isUser(this.user).subscribe((data)=> {
//   if(data)
//   this.router.navigate(['home'])
//   else
//   this.router.navigate(['register'])
// });

// }}




