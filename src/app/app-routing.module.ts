import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ChatComponent } from './pages/home/chat/chat.component';
import { AhorcadoComponent } from './pages/home/juegos/ahorcado/ahorcado.component';
import { MAyorMenorComponent } from './pages/home/juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './pages/home/juegos/preguntados/preguntados.component';
import { MazeComponent } from './pages/home/juegos/maze/maze.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"registro", component:RegistroComponent},
  {path:"quien-soy", component:QuienSoyComponent},
  {path:"chat", component:ChatComponent},
  {path:"app-ahorcado", component:AhorcadoComponent},
  {path:"app-mayor-menor", component:MAyorMenorComponent},
  {path:"preguntados", component:PreguntadosComponent},
  {path:"app-maze", component:MazeComponent},
  {path:"", component:HomeComponent},
  {path:"**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
