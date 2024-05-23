import { Component, OnInit, inject, ViewChild, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Firestore, getDocs} from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFirestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements OnInit{
  private firestore: Firestore = inject(Firestore);
  chatForm:FormGroup;
  usuarioLogueado:any;
  listaMensajes:any=[];
  mensajes:any=[];
  fecha = new Date();

  constructor(private auth: AuthService, private formBuilder:FormBuilder){
    this.chatForm = this.formBuilder.group({
      nuevoMensaje: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.auth.estadoUsuario().subscribe(usuario=>{
      this.usuarioLogueado = usuario;
    })
    this.traerDatos();
  }

  guardarDatos(){
    addDoc(collection(this.firestore, 'mensajes'),{
      'mensaje': this.chatForm.value.nuevoMensaje,
      'usuarioNombre': this.usuarioLogueado.email,
      'usuarioUID': this.usuarioLogueado.uid,
      'fecha': this.fecha
    })
  }

  async traerDatos(){
    const db= getFirestore();
    const col = collection(db, 'mensajes');
    const docSnap = await getDocs(col);
    docSnap.forEach((doc)=>{
      this.listaMensajes.push(doc.data());
    })
  }

  onSend(){
    if(this.chatForm.value.nuevoMensaje == "") return;
    this.guardarDatos();
    let mensaje = {
      emisor:this.usuarioLogueado.uid,
      texto:this.chatForm.value.nuevoMensaje,
      nombre: this.usuarioLogueado.email,
      fecha: this.fecha
    }

    this.mensajes.push(mensaje);
    this.chatForm.reset({
      'nuvoMensaje': ''
    })
    setTimeout(() => {
      this.scrollToTheLastElemntByClassName();
    }, 10);
  }

  scrollToTheLastElemntByClassName(){
    let elements=document.getElementsByClassName('mensaje');
    let ultimo:any=elements[(elements.length-1)];
    let toppos=ultimo.offsetTop;
    
    //@ts-ignore
    document.getElementById('contenedordeMensajes').scrollTop=toppos;
  }
}