import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HojitaComponent} from './hojita/hojita.component';
import {DatosComponent} from './datos/datos.component';
import {InfoComponent} from './info/info.component';



const routes: Routes = [
  {
  path:'',
  component: HojitaComponent
},
  
{
  path: 'datos',
  component: DatosComponent
},

{
  path: 'info',
  component: InfoComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
