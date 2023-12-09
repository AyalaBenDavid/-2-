// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Route, Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registerForm : FormGroup=new FormGroup({});
//   emailReg:RegExp=new RegExp('[]@[a-z].[a-z]')
//   constructor(public userService:LoginService,private router:Router){
//     this.registerForm=new FormGroup({
//       username:new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(30)]),
//       password: new FormControl(null, [Validators.required, Validators.minLength(5),Validators.maxLength(5)]),
//       email: new FormControl(null, [Validators.required,Validators.pattern(this.emailReg)]),
//       phone:new FormControl(null, [Validators.minLength(9),Validators.maxLength(10)]),
//       fullName: new FormControl(null,[Validators.maxLength(20)])

//   });
// }

// username:string|undefined;
// password:string|undefined;
// email:any;
// phone:number|undefined;
// fullName:string|undefined;


// send():void{

// }
// }

