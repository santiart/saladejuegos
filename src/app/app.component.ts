import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SALA DE JUEGOS';
  estado = false;

  constructor(private auth : AuthService, private route:Router){
    this.ObtenerUsuario();
  }

  ObtenerUsuario(){
    (this.auth.estadoUsuario()).subscribe(res=>{
      if(res?.email != null){
        this.estado= true;
      }
    })
  }

  async logOut(){
    Swal.fire({
      title:"¿Esta seguro de que desea salir?",
      text: "tendrá que loguearse de nuevo para poder jugar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar"
    }).then(result=>{
      if(result.isConfirmed){
        this.auth.logOut().then(()=>{
          this.estado = false;
          this.route.navigate(['']);
        }).catch((error)=>{
          console.log(error)
        })
      }
    })
  }
}
