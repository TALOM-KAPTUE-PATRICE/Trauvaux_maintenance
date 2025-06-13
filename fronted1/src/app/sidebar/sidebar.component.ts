import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
   links=[
    {title: 'Dashboard', hovered: false,iconClass: 'fas fa-home'},
    {title: 'Tickets', hovered: false,iconClass: 'fas fa-ticket-alt'},
    {title: 'Besoins', hovered: false,iconClass: 'fas fa-hand-holding'},
    {title: 'Achats', hovered: false,iconClass: 'fas fa-shopping-cart'},
    {title: 'Devis', hovered: false,iconClass: 'fas fa-file-invoice'},
    {title: 'Bon commande', hovered: false,iconClass: 'fas fa-file-signature'},
    {title: 'Facture', hovered: false,iconClass: 'fas fa-file-invoice-dollar'},
    {title: 'Profil', hovered: false,iconClass: 'fas fa-user'},
    {title: 'Logout', hovered: false,iconClass: 'fas fa-sign-out-alt'},
   ];

   sidebarcollapsed: boolean = false;
   toggleSidebar(){
    this.sidebarcollapsed=!this.sidebarcollapsed;
   }
}
