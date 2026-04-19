import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseDataService } from '../../services/firebase-data-service'; // 👈 agregar
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dettalles-page',
  imports: [CommonModule,FormsModule],
  templateUrl: './dettalles-page.html',
  styleUrl: './dettalles-page.css',
})
export class DettallesPage {

  private ruta = inject(ActivatedRoute)
  private servicio = inject(FirebaseDataService)

  parametro = this.ruta.snapshot.paramMap.get('id')

  producto: any 

  constructor(){
    this.producto = this.servicio.getProducto(this.parametro)
  }

 editarProductosMedicos() {
  this.servicio.guardarServicio({
    id: this.parametro,
    nombre: this.producto.nombre,
    proveedor: { ubicacion: { ciudad: this.producto.ciudad }},
    info: { precio: this.producto.precio }
  });
}
}