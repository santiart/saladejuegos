import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async SignIn(email:string, password:string){
    return await this.auth.createUserWithEmailAndPassword(email,password);
  }

  async logIn(email:string, password:string){
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async resetearContraseña(email:string){
    return await this.auth.sendPasswordResetEmail(email);
  }

  async logOut(){
    return await this.auth.signOut();
  }

  async tomarPerfil(){
    return await this.auth.currentUser;
  }

  estadoUsuario(){
    return this.auth.authState;
  }
  
  ListaDeUsuarios(){
    //return this.auth.;
  }
}
