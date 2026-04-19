import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto-service';
import { CommonModule } from '@angular/common';
import { FirebaseDataService } from '../../services/firebase-data-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  private servicio = inject(ProductoService)
  private servicioFirebaseData = inject(FirebaseDataService)

  productos = this.servicio.getProducto()
  buscar = ""
  guardar(producto: any) {
    this.servicioFirebaseData.guardarServicio(producto)
  }
}
