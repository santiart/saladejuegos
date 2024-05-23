export class Usuario {
    email:string;
    password?:string;

    constructor(correo:string, clave?:string){
        this.email = correo;
        this.password = clave;
    }
}
