import { Component, inject } from '@angular/core';
import { FirebaseDataService } from '../../services/firebase-data-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-carrito-page',
  imports: [RouterLink],
  templateUrl: './carrito-page.html',
  styleUrl: './carrito-page.css',
})
export class CarritoPage {
  private servicio = inject(FirebaseDataService)
  carrito = this.servicio.getProductosMedicos()

  carritoArray =Object.entries(this.carrito).map(([key,val])=>({ 
    id:key,
    nombre:val.nombre,
    precio:val.precio,
    ciudad:val.ciudad,
  }))

eliminarProductosMedicos(item: any) {
  this.servicio.eliminarProductosMedicos(item);
}
}
