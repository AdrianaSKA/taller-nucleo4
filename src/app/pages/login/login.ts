import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private servicio = inject(FirebaseAuthService)

  correo=""
  contrasenia=""

  login(datos: any) {
    this.servicio.login(datos.value)
  }
}
