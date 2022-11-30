import { Component, OnInit } from '@angular/core';
import { HauserNEU } from '../hauser';
@Component({
  selector: 'app-bauplatz',
  templateUrl: './bauplatz.component.html',
  styleUrls: ['./bauplatz.component.css']
})
export class BauplatzComponent implements OnInit {
  bild1:string = 'assets/Images/Bauplatz/Bauplatz1.jpg';
  bild2:string = 'assets/Images/Bauplatz/Bauplatz1.jpg';
  bild3:string = 'assets/Images/Bauplatz/Bauplatz1.jpg';
  bild4:string = 'assets/Images/Bauplatz/Bauplatz1.jpg';
  hausers = HauserNEU;


  constructor() { }

  ngOnInit(): void {
  }

}
