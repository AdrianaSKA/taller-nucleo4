import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/config';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {


  //LOGIN
  login(datosUser: any) {

  signInWithEmailAndPassword(auth, datosUser.correo, datosUser.contrasenia)
    .then((userCredential) => {
      
      const user = userCredential.user;

      if (user.email) {
  localStorage.setItem('usuario', user.email);
}

      alert("acceso correcto")
    })
    .catch((error) => {
      alert(error.message)
    });
}

  //REGITRO 

  registro(datosUser:any){


    createUserWithEmailAndPassword(auth, datosUser.correo, datosUser.contrasenia)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Registro exitoso")
    // ...
  })
  .catch((error) => {
  alert(error.message);


    // ..
  });
  }


}
