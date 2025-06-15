import { Component } from '@angular/core';
import { SideNavbar } from '../../components/side-navbar/side-navbar';
import { TestCard } from '../../components/test-card/test-card';
import { SearchBar } from "../../components/search-bar/search-bar";

@Component({
  selector: 'app-home',
  imports: [
    TestCard,
    SearchBar
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
