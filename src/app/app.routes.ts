import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SideNavbar } from './components/side-navbar/side-navbar';
import { TestPage } from './pages/test-page/test-page';
import { Analysis } from './pages/analysis/analysis';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'test',
    component: TestPage
  },
  {
    path: 'analysis',
    component : Analysis
  }
];
