import { Component, Output,EventEmitter, OnInit, HostListener } from '@angular/core';
import {navbarData} from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';




interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
        style({opacity:1})
        )
      ]),
        transition(':leave',[
          style({opacity:0}),
          animate('350ms',
          style({opacity:0})
          )
        ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
         keyframes([
          style({transform: 'RouterState( 0deg )',offset: '0'}),
          style({transform: 'RouterState( 2turn )',offset: '1'}),
         ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit{


  ngOnInit(): void {
    this.screenWidth=window.innerWidth;
  }
  collapsed=true;
  screenWidth=0;
  navDta=navbarData;

  @HostListener('window:resize',['$event'])
   onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
    }
   }
@Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

toggleCollapse(){
  this.collapsed=!this.collapsed;
  this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
}

 closeSidenav(){
  this.collapsed=false;
  this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
}
}
