import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { ErrorComponent } from './pages/error/error.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { ChatComponent } from './pages/home/chat/chat.component';
import { MAyorMenorComponent } from './pages/home/juegos/mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './pages/home/juegos/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './pages/home/juegos/preguntados/preguntados.component';
import { MazeComponent } from './pages/home/juegos/maze/maze.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienSoyComponent,
    ErrorComponent,
    ChatComponent,
    MAyorMenorComponent,
    AhorcadoComponent,
    PreguntadosComponent,
    MazeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    LoginComponent,
    RegistroComponent,
    AngularFireModule.initializeApp({"projectId":"sala-de-juegos-324cb","appId":"1:594389967296:web:173e1c5d37f74eed882825","storageBucket":"sala-de-juegos-324cb.appspot.com","apiKey":"AIzaSyDNQpE3brPH7E7AhZ5O-bkDDb4s6jTv_CI","authDomain":"sala-de-juegos-324cb.firebaseapp.com","messagingSenderId":"594389967296","measurementId":"G-Q6C24CL0JP"}),
    provideFirebaseApp(() => initializeApp({"projectId":"sala-de-juegos-324cb","appId":"1:594389967296:web:173e1c5d37f74eed882825","storageBucket":"sala-de-juegos-324cb.appspot.com","apiKey":"AIzaSyDNQpE3brPH7E7AhZ5O-bkDDb4s6jTv_CI","authDomain":"sala-de-juegos-324cb.firebaseapp.com","messagingSenderId":"594389967296","measurementId":"G-Q6C24CL0JP"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
