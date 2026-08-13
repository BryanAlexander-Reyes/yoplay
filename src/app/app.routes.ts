import { Routes } from '@angular/router';
// Importación de componentes y de Layout para la página.
import { Presentation } from './pages/presentation/presentation';
import { Home } from './pages/home/home';
import { Tyc } from './pages/tyc/tyc';
import { Layout } from './layout/layout/layout';
import { authGuard } from './guards/auth-guard';
import { LoginComponent } from './pages/usuario/login/login';

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
  }


];
