import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';
import { reload } from '@angular/fire/auth';
//import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email:any = "";
  estado=false;

  constructor(public auth: AuthService, private router : Router){
    this.ObtenerUsuario();
  }

  ObtenerUsuario(){
    (this.auth.estadoUsuario()).subscribe(res=>{
      this.email = res?.email;
      if(this.email != null){
      this.estado = true;
      }
    })
  }
}
