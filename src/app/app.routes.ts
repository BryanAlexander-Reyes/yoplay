import { Routes } from '@angular/router';
import { CreacionTorneos } from './pages/organizacion/creacion-torneos/creacion-torneos';

export const routes: Routes = [
{
  path: '',
  redirectTo: 'torneo',
  pathMatch: 'full'
},
{
  path: 'torneo',
  component: CreacionTorneos
}
];