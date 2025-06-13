import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { BesoinComponent } from './besoin/besoin.component';
import { DemandeAchatComponent } from './demande-achat/demande-achat.component';
import { DevisComponent } from './devis/devis.component';
import { CommandeComponent } from './commande/commande.component';
import { FactureComponent } from './facture/facture.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [

  {
    path: '',
    redirectTo:'dashboard',
    pathMatch :'full'

  },
  {
    path: 'dashboard',
    component: DashboardComponent

  },

  {
    path: 'tickets',
    component: TicketComponent

  },

  {
    path: 'besoins',
    component: BesoinComponent
  },
  {
    path: 'demandeAchats',
    component: DemandeAchatComponent
  },
  {
    path: 'besoins',
    component: BesoinComponent
  },
  {
    path: 'devis',
    component: DevisComponent
  },
  {
    path: 'bonCommandes',
    component: CommandeComponent
  },
  {
    path: 'factures',
    component: FactureComponent
  },
  {
    path: 'profil',
    component: PagesComponent
  },

  {
    path: 'compte',
    component:  MediaComponent
  },
  {
    path: 'login',
    component: LoginComponentComponent

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
