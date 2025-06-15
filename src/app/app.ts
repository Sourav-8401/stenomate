import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavbar } from './components/side-navbar/side-navbar';

@Component({
  selector: 'app-root',
  imports: [
    SideNavbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'stenomate';
}
