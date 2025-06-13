import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fronted1';
  isSidebarCollapsed :boolean=false;
  screenWidth=0;
  onToggleSideNav(data: SideNavToggle){
     this.screenWidth=data.screenWidth;
     this.isSidebarCollapsed=data.collapsed;
  }
}
