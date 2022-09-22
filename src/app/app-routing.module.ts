import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ListadoComponent} from "./clientes/listado/listado.component";
import {RegistroComponent} from "./clientes/registro/registro.component";

const routes: Routes = [

  {path:"",component:LoginComponent},
  {path:"listado",component:ListadoComponent},
  {path:"registro",component:RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
