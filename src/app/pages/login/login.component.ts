import { Component, Input, Output} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent{
  loginForm : FormGroup;
  @Output() email:any;

  constructor(public auth:AuthService,
     public formBuilder:FormBuilder,
      public router:Router){
        this.loginForm = this.formBuilder.group({
          email: ['', [
            Validators.required,
            Validators.email,
            Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
          ]],
          password: ['',[
            Validators.required,
            Validators.pattern("(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z]).{8,}")
          ]]
        })
      }

  get errorControl(){
    return this.loginForm?.controls;
  }

  async LogIn()
  {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if(this.loginForm?.valid){
      const user = await this.auth.logIn(email, password).catch((error)=>{
        console.log(error);
      })
      if(user){
        this.router.navigate(['']);
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Usuario inexistente",
          heightAuto: false,
          text: 'Revise si su email y contraseña son los correctos'
        })
      }
    }else{
      Swal.fire({
        icon: "error",
        title:'Usuario inexistente',
        heightAuto:false,
        text: 'Revise si su email y contraseña son los correctos'
      });
    }
  }
}
