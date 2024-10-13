import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { EstabelecimentoFormComponent } from './pages/estabelecimento-form/estabelecimento-form.component';

export const routes: Routes = [
    { path: '', component: AdminComponent},
    { path: 'formulario-estabelecimento', component: EstabelecimentoFormComponent},
];
  export class AppRoutingModule { }