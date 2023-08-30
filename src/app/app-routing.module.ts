import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { VeterinariosComponent } from './veterinarios/veterinarios.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicosComponent } from './servicos/servicos.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'veterinarios', component: VeterinariosComponent},
  { path: 'servicos', component: ServicosComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
