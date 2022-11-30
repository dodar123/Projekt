import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hauser } from '../häuser';
import { HauserNEU } from '../hauser';


@Component({
  selector: 'app-hauser',
  templateUrl: './hauser.component.html',
  styleUrls: ['./hauser.component.css']
})
export class HauserNEUComponent implements OnInit {

  constructor() { }
  bild1:string = 'assets/Images/Häuser/Haus1.jpg';
  bild2:string = 'assets/Images/Häuser/Haus2.jpg';
  bild3:string = 'assets/Images/Häuser/Haus3.jpg';
  bild4:string = 'assets/Images/Häuser/Haus4.jpg';
  hausers = HauserNEU;

  ngOnInit(): void {
  }

}
