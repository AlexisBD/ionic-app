import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialidadesPage } from './especialidades.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialidadesPage
  },
  {
    path: 'informacion',
    loadChildren: () => import('./informacion/informacion.module').then( m => m.InformacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialidadesPageRoutingModule {}
