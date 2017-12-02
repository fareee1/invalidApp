import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public citys = [
    {id: 1, name: "Sarajevo"},
    {id: 2, name: "Zenica"},
    {id: 3, name: "Tuzla"},
    {id: 4, name: "Banja Luka"}
  ];
 selectedValue = null;

}
