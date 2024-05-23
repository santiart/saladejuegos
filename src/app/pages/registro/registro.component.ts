import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  registroForm:FormGroup;

  constructor(public auth:AuthService,
    public formBuilder:FormBuilder,
    public router:Router){
      this.registroForm = this.formBuilder.group({
        email: ['', [
          Validators.required,
          Validators.email,
          Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
        ]],
        password: ['',[
          Validators.required,
          Validators.pattern("(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z]).{8,}")
        ]],
        password2: ['',[
          Validators.required,
          Validators.pattern("(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z]).{8,}")
        ]]
      })
    }

  get errorControl(){
    return this.registroForm?.controls;
  }

  async Registrar()
  {
    const email = this.registroForm.value.email;
    const password = this.registroForm.value.password;
    const password2 = this.registroForm.value.password2;

    if(this.registroForm?.valid){
      const user = await this.auth.SignIn(email, password).catch((error)=>{
        console.log(error);
      })
      if(user && password == password2){
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado con éxito',
          heightAuto: false,
        })
        this.router.navigate(['/']);
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
