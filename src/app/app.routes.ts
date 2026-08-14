

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/login/login';
import { RegisterComponent } from './pages/usuario/register/register';
import { ValidadorComponente } from './pages/validador-componente/validador-componente';
import { SpanComponent } from './pages/spancomponent/spancomponent';



// Importación de componentes y de Layout para la página.
import { Presentation } from './pages/presentation/presentation';
import { Home } from './pages/home/home';
import { Tyc } from './pages/tyc/tyc';
import { Layout } from './layout/layout/layout';
import { authGuard } from './guards/auth-guard';
// importaciones de Brayan Reyes
import { LoginComponent } from './pages/usuario/login/login';
// importaciones de Cristian Barrera
import { CreacionTorneos } from './pages/organizacion/creacion-torneos/creacion-torneos';
import { RegistroEquipos } from './pages/organizacion/registro-equipos/registro-equipos';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        canActivate: [authGuard],
        children: [{
            path: '',
            redirectTo: '/main',
            pathMatch: 'full',
        },
        {
            path: 'home',
            component: Home
        },
    ]
    },
    {
        path: 'main',
        component: Presentation
    },
    {
        path: 'tyc',
        component: Tyc
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
    path: 'torneo',
    component: CreacionTorneos
  }


];

