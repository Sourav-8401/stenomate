import { Component } from '@angular/core';
import { SearchBar } from "../../components/search-bar/search-bar";

@Component({
  selector: 'app-test-page',
  imports: [SearchBar],
  templateUrl: './test-page.html',
  styleUrl: './test-page.css'
})
export class TestPage {

}
