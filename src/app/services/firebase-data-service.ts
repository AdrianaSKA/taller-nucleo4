import { Injectable } from '@angular/core';
import { onValue, ref, remove, set, update } from 'firebase/database';
import { db } from '../../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseDataService {


  guardarServicio(producto: any) {

    set(ref(db, 'producto/' + producto.id), {
      nombre: producto.nombre,
      ciudad: producto.proveedor.ubicacion.ciudad,
      precio: producto.info.precio
    });


  }

  getProductosMedicos(): Observable<any> {
    let carrito: any
    const starCountRef = ref(db, '/producto');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      carrito = data
    });
    return carrito

  }

  editarProductosMedicos(producto: any) {
    update(ref(db, 'producto/' + producto.id), {
    })
  }

  getProducto(id: any): Observable<any> {
    let producto: any
    const starCountRef = ref(db, 'producto/' + id);

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      producto = data
    });

    return producto;
  }


  eliminarProductosMedicos(producto: any) {
    remove(ref(db, 'producto/' + producto.id));
  }

}



