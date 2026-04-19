import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Error404Page } from './pages/error404-page/error404-page';
import { CarritoPage } from './pages/carrito-page/carrito-page';
import { DettallesPage } from './pages/dettalles-page/dettalles-page';
import { loginGuardGuard } from './guards/login-guard-guard';

export const routes: Routes = [
    { path: "home", component: Home },
    { path: "productos", component: Productos, canActivate:[loginGuardGuard as any]},
    { path: "carrito", component: CarritoPage, canActivate: [loginGuardGuard as any] },
    {path:"detalles/:id", component:DettallesPage, canActivate:[loginGuardGuard as any]},
    { path: "registro", component: Registro },
    { path: "login", component: Login  },
    {path:"**", component:Error404Page }
];
