import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.css'
})
export class MAyorMenorComponent {
  dato:any;
  mensaje:string="";
  started=false;
  termino=false;
  acerto = 0;
  record=0;

  constructor(private route: Router){
  }
  
  cartas:any = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  sortearcartas(){
    this.started = true;
    this.termino = false;
    this.dato = this.cartas.sort(function(){
      return 0.5 - Math.random();
    });
    console.log(this.dato);
  }

  Mayor(){
    if(this.dato[0] > this.dato[1]){
      Swal.fire({
        title: "¡ACERTASTE! Seguí así",
        background: "transparent",
        imageUrl: "../../../../../assets/contento.png",
        imageWidth: 80,
        imageHeight: 80,
        timer:1000,
        showConfirmButton: false,
      })
      this.acerto ++;
      if(this.acerto > this.record){
        this.record = this.acerto;
      }
      this.termino = false;
      this.started = true;
      this.sortearcartas();
    }
    else{
      Swal.fire({
        title:"¡PERDISTE!",
        imageUrl: "../../../../../assets/llorando.png",
        imageWidth: 80,
        imageHeight: 80,
        background: "transparent",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Salir",
        cancelButtonText: "Seguir Jugando!",
      }).then(result=>{
        if(result.isConfirmed){
          this.route.navigate(['']);
        }
      })
      this.started = false;
      this.termino = true;
      this.acerto=0;
    }
  }

  Menor(){
    if(this.dato[0] < this.dato[1]){
      Swal.fire({
        title: "¡ACERTASTE! Seguí así",
        background: "transparent",
        imageUrl: "../../../../../assets/contento.png",
        imageWidth: 80,
        imageHeight: 80,
        timer:1000,
        showConfirmButton: false,
      })
      this.acerto ++;
      if(this.acerto > this.record){
        this.record = this.acerto;
      }
      this.termino = false;
      this.started = true;
      this.sortearcartas();
    }
    else{
      Swal.fire({
        title:"<strong><u>¡PERDISTE!</u></strong>",
        imageUrl: "../../../../../assets/llorando.png",
        imageWidth: 80,
        imageHeight: 80,
        background: "transparent",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Salir",
        cancelButtonText: "Seguir Jugando!",
      }).then(result=>{
        if(result.isConfirmed){
          this.route.navigate(['']);
        }
      })
      this.started = false;
      this.termino = true;
      this.acerto=0;
    }
  }

}

