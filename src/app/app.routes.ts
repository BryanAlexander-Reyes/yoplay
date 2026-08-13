

import { Routes } from '@angular/router';
import { CreacionTorneos } from './pages/organizacion/creacion-torneos/creacion-torneos';
import { RegistroEquipos } from './pages/organizacion/registro-equipos/registro-equipos';

export const routes: Routes= [
{
  path: '',
  redirectTo: 'Registro',
  pathMatch: 'full'
},
{
  path: 'torneo',
  component: CreacionTorneos
},
{
  path:'Registro',
  component: RegistroEquipos
}
];

