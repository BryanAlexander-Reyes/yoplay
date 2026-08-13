import { Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/login/login';
import { RegisterComponent } from './pages/usuario/register/register';
import { ValidadorComponente } from './pages/validador-componente/validador-componente';
import { SpanComponent } from './pages/spancomponent/spancomponent';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component:RegisterComponent
  },
  {
    path:'validador',
    component:ValidadorComponente
  },
  {
    path:'span',
    component:SpanComponent
  },

];
