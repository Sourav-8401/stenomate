import { Component, NgModule } from '@angular/core';
import { Home } from '../../pages/home/home';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-side-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './side-navbar.html',
  styleUrl: './side-navbar.css'
})
export class SideNavbar {
    isSidebarOpen: boolean = true;
  showSidebarOnSmall: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSmallSidebar() {
    this.showSidebarOnSmall = !this.showSidebarOnSmall;
  }
}
