import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private servicio = inject(FirebaseAuthService)
  correo=""
  contrasenia=""
  registro(datos: any) {
    this.servicio.registro(datos.value)
  }
}
