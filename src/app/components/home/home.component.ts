import { Component, OnInit } from '@angular/core';

import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
faHouse = faHouse;
faSearch = faSearch;
faPlus = faPlus ;
faSliders = faSliders;
  constructor() { }

  ngOnInit(): void {
  }

}
