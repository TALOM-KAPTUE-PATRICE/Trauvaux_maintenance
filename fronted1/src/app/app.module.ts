
import {  NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketComponent } from './ticket/ticket.component';
import { BesoinComponent } from './besoin/besoin.component';
import { DemandeAchatComponent } from './demande-achat/demande-achat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DevisComponent } from './devis/devis.component';
import { CommandeComponent } from './commande/commande.component';
import { FactureComponent } from './facture/facture.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule } from '@angular/material/form-field'
import { FormTicketComponent } from './form-ticket/form-ticket.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule } from '@angular/material/select'
import {MatInputModule } from '@angular/material/input';
import { EditComponent } from './edit/edit.component';
import { EtudiantComponent } from './etudiant/etudiant.component'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponentComponent,
    TicketComponent,
    BesoinComponent,
    DemandeAchatComponent,
    SidebarComponent,
    HeaderComponent,
    DevisComponent,
    CommandeComponent,
    FactureComponent,
    BodyComponent,
    SidenavComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    FormTicketComponent,
    EditComponent,
    EtudiantComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
